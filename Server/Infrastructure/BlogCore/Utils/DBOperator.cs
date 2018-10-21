using Microsoft.Practices.Unity;
using NHibernate;
using NHibernate.Context;
using NHibernate.SqlCommand;
using System.Diagnostics;

namespace Blog.BlogCore.Utils
{
    public class DBOperator
    {
        #region 
        private ISessionFactory factory;
        static DBOperator()
        {
            Instance = new DBOperator(Nefarian.Core.WebServiceSite.GetAppContainer().Resolve<ISessionFactory>("Blog"));
        }

        public static readonly DBOperator Instance;

        private DBOperator(ISessionFactory factory)
        {
            this.factory = factory;
        }

        public ISession OpenSession()
        {
            return factory.OpenSession();
        }

        public IStatelessSession OpenStatelessSession()
        {
            return factory.OpenStatelessSession();
        }
        public ISession GetCurrentSession()
        {
            if (!CurrentSessionContext.HasBind(factory))
            {
                CurrentSessionContext.Bind(this.OpenSession());
            }
            return factory.GetCurrentSession();
        }
        internal void RelessCurrentSession()
        {
            if (CallSessionContext.HasBind(factory))
            {

                ISession session = CurrentSessionContext.Unbind(factory);
                if (session.IsOpen)
                {
                    session.Close();
                }
            }
        }
#if DEBUG
        internal class NHSQLWatcher : EmptyInterceptor
        {
            public static readonly NHSQLWatcher Instance = new NHSQLWatcher();
            public override SqlString OnPrepareStatement(SqlString sql)
            {
                Debug.Print(sql.ToString());
                return base.OnPrepareStatement(sql);
            }
        }
#endif
        #endregion
    }
}
