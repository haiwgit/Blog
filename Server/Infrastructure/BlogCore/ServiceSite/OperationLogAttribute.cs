using Blog.BlogCore.Entites;
using Blog.BlogCore.Utils;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Web;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.ServiceSite
{
    public class OperationLogAttribute: Nefarian.Core.MessageInspectorAttribute
    {
        public override object AfterReceiveRequest(ref System.ServiceModel.Channels.Message request)
        {
            OperationLog log = null;
            if (BlogRequestContext.Current<BlogRequestContext>().CurrentUser != null)
            {
                log = new OperationLog()
                {
                    ID = BlogRequestContext.Current<BlogRequestContext>().CurrentUser.ID,
                    UserName = BlogRequestContext.Current<BlogRequestContext>().CurrentUser.NAME,
                    Url = WebOperationContext.Current.IncomingRequest.UriTemplateMatch.RequestUri.AbsolutePath,
                    RequestIP= WebOperationContext.Current.IncomingRequest.UriTemplateMatch.BaseUri.DnsSafeHost,
                    UserAgent=WebOperationContext.Current.IncomingRequest.UserAgent,
                    OperationTiem = DateTime.Now,
                    Endpoint = BlogRequestContext.Current<BlogRequestContext>().IsClient?"Client":"Mobile",
                };
            }
            return log;
        }
        public override void BeforeSendReply(ref System.ServiceModel.Channels.Message reply, object correlationState)
        {
            OperationLog log = correlationState as OperationLog;
            if (log != null)
            {
                ISession session = DBOperator.Instance.GetCurrentSession();
                try
                {
                    session.Clear();
                    session.Save(log);
                    session.Flush();
                }
                catch (Exception ex)
                {
                    //
                }
            }
        }
    }
}
