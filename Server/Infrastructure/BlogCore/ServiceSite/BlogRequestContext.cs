using Blog.BlogCore.Entites.SystemManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.ServiceSite
{
    public class BlogRequestContext : Nefarian.Core.WebRequestContext
    {
        public const string EndpointKey = "_Endpoint";
        public UserInfo CurrentUser
        {
            get
            {
                if (Session != null)
                {
                    return Session["_CurrentUser"] as UserInfo;
                }
                else
                {
                    return null;
                }
            }
            set
            {
                if (Session != null)
                    Session["_CurrentUser"] = value;
            }
        }
        public bool IsClient
        {
            get
            {
                return object.Equals(Session[EndpointKey], "elient");
            }
        }
    }
}
