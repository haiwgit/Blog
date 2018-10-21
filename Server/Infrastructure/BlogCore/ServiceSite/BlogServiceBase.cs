using Blog.BlogCore.Entites.SystemManager;
using Foundition.Utiles;
using Nefarian.Core;
using Nefarian.Exchange;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.ServiceSite
{
    [ServiceErrorHandler]
    [OperationLog(Order = 50)]
    [FreeDBCurrentSession(Order = 99)]
    public class BlogServiceBase : ServiceBase
    {
        public ExchangeCenter ExchangeCebter
        {
            get{ return ExchangeHelper.GetExchange(); }
        }
        public UserInfo CurrentUser
        {
            get
            {
                return BlogRequestContext.Current<BlogRequestContext>().CurrentUser;
            }
            set
            {
                BlogRequestContext.Current<BlogRequestContext>().CurrentUser = value;
            }

        }
    }
}
