using Microsoft.Practices.Unity;
using Nefarian.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.ServiceSite
{
    public class ServiceErrorHandler : ErrorHandlerAttribute
    {
        public override void OnError(Exception error)
        {
            IUnityContainer container = WebServiceSite.GetAppContainer();
            //ILog log = container.Resolve<ILog>();
            //LogData data=new 
            base.OnError(error);
        }
    }
}
