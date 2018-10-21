using Blog.BlogCore.Entites.SystemManager;
using Blog.BlogCore.ServiceSite;
using Blog.BlogCore.Utils;
using Blog.SystemManager.Contracts;
using Nefarian.Core;
using NHibernate;
using NHibernate.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.SystemManager.Services
{
    public class SystemManagerService: BlogServiceBase, ISystemManagerService
    {
        public string Register(UserInfo info)
        {
            return null;
        }
        public List<UserInfo> GetUserInfoList()
        {
            using (ISession session = DBOperator.Instance.OpenSession())
            {
                List<UserInfo> result = new List<UserInfo>();
                result = session.Query<UserInfo>().ToList();
                return result;
            }
        }
    }
}
