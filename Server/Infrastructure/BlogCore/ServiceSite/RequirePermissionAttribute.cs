using Nefarian.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.ServiceSite
{
    public class RequirePermissionAttribute:OperationInspectorAttribute
    {
        public const string AuthTreeKey = "_AuthTree";
        public RequirePermissionAttribute(string permissionCode) 
            : this(new string[] { permissionCode })
        {
        }
        public RequirePermissionAttribute(string[] permissionCode)
        {
            this.PermissionCode = permissionCode;
        }
        public string[] PermissionCode
        {
            get;
            private set;
        }
        public override object BeforeCall(string operationName, object[] inputs)
        {
            return base.BeforeCall(operationName, inputs);
        }
    }
}
