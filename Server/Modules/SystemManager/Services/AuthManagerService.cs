using Blog.BlogCore.Entites.SystemManager;
using Blog.BlogCore.ServiceSite;
using Blog.BlogCore.Utils;
using Blog.SystemManager.Contracts;
using Nefarian.Core;
using NHibernate;
using NHibernate.Linq;
using System.Collections.Generic;
using System.Linq;

namespace Blog.SystemManager.Services
{
    public class AuthManagerService: BlogServiceBase,IAuthManagerService
    {
        public UserDTO Login(string account, string password, string endpoint, Dictionary<string, string> properties, out string ticket)
        {
            UserDTO result = new UserDTO();
            ticket = null;
            if (string.IsNullOrEmpty(account) || string.IsNullOrEmpty(password))
                return null;
            //账号不区分大小写
            account = account.ToUpper();
            //获取服务端加密后的密码
            string encryptedPassword = SHA1Helper.SHA1(password);
            ISession session = DBOperator.Instance.GetCurrentSession();
            UserInfo user = session.Query<UserInfo>()
                .Where(p => p.NAME.ToUpper() == account && p.PASS == encryptedPassword)
                .SingleOrDefault();
            if (user == null)
                //用户名或密码错误，登录失败
                return null;
            result.Info = user;
            //创建身份票据
            ticket = WebRequestContext.Current().CreateTicket();
            return result;
        }
        public void Logout()
        {
            //注销身份票据
            BlogRequestContext.Current().SignOut();
        }
    }
}
  