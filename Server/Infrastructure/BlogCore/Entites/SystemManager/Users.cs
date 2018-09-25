using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.Entites.SystemManager
{
    /// <summary>
    /// 用户表
    /// </summary>
    [DataContract]
    public class Users
    {
        /// <summary>
        /// 主键
        /// </summary>
        [DataMember]
        public string ID { get; set; }
        /// <summary>
        /// 用户名
        /// </summary>
        [DataMember]
        public string NAME { get; set; }
        /// <summary>
        /// 密码
        /// </summary>
        [DataMember]
        public string PASS { get; set; }
    }
}
