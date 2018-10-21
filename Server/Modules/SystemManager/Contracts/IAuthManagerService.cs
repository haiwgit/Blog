using Blog.BlogCore.Entites.SystemManager;
using Nefarian.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Threading.Tasks;

namespace Blog.SystemManager.Contracts
{
    [ServiceContract]
    interface IAuthManagerService
    {
        [WebInvoke(Method = HttpMethod.POST, BodyStyle = WebMessageBodyStyle.Wrapped)]
        UserDTO Login(string account, string password, string endpoint, Dictionary<string, string> properties, out string ticket);
    }
}
