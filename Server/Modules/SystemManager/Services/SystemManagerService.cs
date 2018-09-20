using Blog.SystemManager.Contracts;
using Nefarian.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.SystemManager.Services
{
    public class SystemManagerService: ServiceBase,ISystemManagerService
    {
        public string GetString(string name) {
            return "hello";
        }
    }
}
