using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.Entites.SystemManager
{
    [DataContract]
    public class UserDTO
    {
        [DataMember]
        public UserInfo Info { get; set; }
        [DataMember]
        public string Message { get; set; }
    }
}
