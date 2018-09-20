using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using Microsoft.Practices.Unity;
using Nefarian.Exchange;
using Nefarian.Startup;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Blog
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
        private NotifyIcon notifyIcon = null;
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            notifyIcon = new NotifyIcon();
            notifyIcon.BalloonTipText = "服务已启动";
            notifyIcon.Text = this.Title;
            Assembly asm = this.GetType().Assembly;
            Stream iocStrem = asm.GetManifestResourceStream("Blog.favicon.ico");
            notifyIcon.Icon = new System.Drawing.Icon(iocStrem);
            notifyIcon.Visible = true;
            notifyIcon.ShowBalloonTip(1000);
            notifyIcon.MouseClick += NotifyIcon_MouseClick; ;
            txtMsg.AppendText("启动中");
            txtMsg.AppendText(Environment.NewLine);
            AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;
            ThreadPool.QueueUserWorkItem(o =>
            {
                Bootstrapper boot = new Bootstrapper();
                boot.PreInitModules += boot_PreInitModules;
                boot.OnServiceOpened += boot_OnServiceOpened;
                try
                {
                    boot.Run();
                    Dispatcher.Invoke(() => {
                        txtMsg.AppendText(Environment.NewLine);
                        txtMsg.AppendText("启动完毕");
                        this.Visibility = Visibility.Hidden;
#if !DEBUG
                        running = true;
#endif
                    });

                }
                catch (Exception ex)
                {
                    Dispatcher.Invoke(() =>
                    {
                        System.Windows.MessageBox.Show("启动出现异常：" + Environment.NewLine + ex.ToString(), string.Empty, MessageBoxButton.OK, MessageBoxImage.Error);
                    });

                }
            });
        }

        private void boot_OnServiceOpened(object sender, ServiceOpenEventArgs e)
        {
            Dispatcher.Invoke(() => {
                foreach (Uri u in e.EndpointsAddress)
                {
                    txtMsg.AppendText(u.AbsoluteUri);
                    txtMsg.AppendText(Environment.NewLine);
                }
            });
        }

        private void boot_PreInitModules(object sender, BootstrapperEventArgs e)
        {
            string conStr = ConfigurationManager.ConnectionStrings["MsSql"].ConnectionString;
            FluentConfiguration config = Fluently.Configure();
            foreach (Nefarian.Configuration.ModuleConfiguration module in e.Configuration.Modules)
            {
                config.Mappings(x => x.FluentMappings.AddFromAssembly(module.ModuleType.Assembly));
            }
            config.Database(MsSqlConfiguration.MsSql2008.ConnectionString(conStr));
            config.CurrentSessionContext("wcf_operation");

            ISessionFactory sessionFactory;
            bool debugSQL = false;
            bool.TryParse(ConfigurationManager.AppSettings["DebugSQL"], out debugSQL);
            if (debugSQL)
            {
                NHibernate.Cfg.Configuration nhibernateConfig = config.BuildConfiguration();
                nhibernateConfig.Properties["show_sql"] = "true";
                nhibernateConfig.Properties["format_sql"] = "true";
                sessionFactory = nhibernateConfig.BuildSessionFactory();
            }
            else
            {
                sessionFactory = config.BuildSessionFactory();
            }
            IUnityContainer appCon = Nefarian.Core.WebServiceSite.GetAppContainer();
            appCon.RegisterInstance<ISessionFactory>("Blog", sessionFactory);
            ExchangeCenter exchange = new ExchangeCenter();
            appCon.RegisterInstance<ExchangeCenter>(exchange);
            MessagePublisher publisher = new MessagePublisher();
            appCon.RegisterInstance<MessagePublisher>(publisher);

        }

        private void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            throw new NotImplementedException();
        }
        private void NotifyIcon_MouseClick(object sender, System.Windows.Forms.MouseEventArgs e)
        {
            if (this.WindowState == WindowState.Normal)
            {
                //最大化
                if (this.Visibility == Visibility.Hidden)
                {
                    this.Visibility = Visibility.Visible;
                    this.WindowState = WindowState.Normal;
                }
            }
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
#if !DEBUG
        if (running) {
                MessageBoxResult res = System.Windows.MessageBox.Show("服务正在运行，确认关闭么？");
                if (res==MessageBoxResult.Cancel) {
                    e.Cancel = true;
                }
            }
#endif
        }

        private void Window_StateChanged(object sender, EventArgs e)
        {
            if (this.WindowState == WindowState.Minimized)
            {
                //最小化
                if (this.Visibility == Visibility.Visible)
                {
                    this.Visibility = Visibility.Hidden;
                    this.WindowState = WindowState.Normal;
                }
            }
        }
    }
}
