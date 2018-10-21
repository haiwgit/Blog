using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.Entites
{
    [DataContract]
    public class OperationLog
    {
        /// <summary>
        /// ID
        /// </summary>
        [DataMember]
        public virtual string ID { get; set; }
        /// <summary>
        /// 用户名
        /// </summary>
        [DataMember]
        public virtual string UserName { get; set; }
        //路径地址
        [DataMember]
        public virtual string Url {get; set; }
        /// <summary>
        /// 请求IP
        /// </summary>
        [DataMember]
        public virtual string RequestIP { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember]
        public virtual string UserAgent { get; set; }
        /// <summary>
        /// 客户端类型
        /// </summary>
        [DataMember]
        public virtual string Endpoint { get; set; }

        [DataMember]
        public virtual DateTime? OperationTiem { get; set; }
    }
}
