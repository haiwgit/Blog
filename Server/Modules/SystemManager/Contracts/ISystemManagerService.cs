using Blog.BlogCore.Entites.SystemManager;
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
    interface ISystemManagerService
    {
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string Register(UserInfo info);

        [WebGet(UriTemplate = "/GetUserInfoList/")]
        List<UserInfo> GetUserInfoList();
    }
}
