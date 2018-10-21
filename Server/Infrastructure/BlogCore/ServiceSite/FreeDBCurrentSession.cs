using Blog.BlogCore.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.ServiceSite
{
    public class FreeDBCurrentSession:Nefarian.Core.MessageInspectorAttribute
    {
        public override void BeforeSendReply(ref System.ServiceModel.Channels.Message reply, object correlationState)
        {
            DBOperator.Instance.RelessCurrentSession();
        }
    }
}
