using Microsoft.Practices.Unity;
using Nefarian.Exchange;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Foundition.Utiles
{
    public static class ExchangeHelper
    {
        public static ExchangeCenter GetExchange()
        {
            IUnityContainer container = Nefarian.Core.WebServiceSite.GetAppContainer();
            return container.Resolve<ExchangeCenter>();
        }
        public static MessagePublisher GetPublisher()
        {
            IUnityContainer container = Nefarian.Core.WebServiceSite.GetAppContainer();
            return container.Resolve<MessagePublisher>();
        }
    }
}
