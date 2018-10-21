using Blog.BlogCore.Entites.SystemManager;
using Blog.BlogCore.ServiceSite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.Utils
{
    public class UserHelper
    {
        static UserHelper() { }
        public static UserInfo GetCurrentUser()
        {
            return BlogRequestContext.Current<BlogRequestContext>().CurrentUser;
        }
    }
}
