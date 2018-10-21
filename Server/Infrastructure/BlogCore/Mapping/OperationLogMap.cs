using Blog.BlogCore.Entites;
using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.Mapping
{
    public class OperationLogMap:ClassMap<OperationLog>
    {
        public OperationLogMap() {
            Table("ss_log");
            Id(t=>t.ID,"ID").GeneratedBy.Assigned();
            Map(t=>t.UserName, "UserName");
            Map(t => t.RequestIP, "RequestIP");
            Map(t => t.UserAgent, "UserAgent");
            Map(t => t.Url, "Url");
            Map(t => t.OperationTiem, "OperationTiem");
            Map(t => t.Endpoint, "Endpoint");
        }
    }
}
