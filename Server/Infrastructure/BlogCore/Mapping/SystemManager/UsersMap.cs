using Blog.BlogCore.Entites.SystemManager;
using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.BlogCore.Mapping.SystemManager
{
    public class UsersMap:ClassMap<UserInfo>
    {
        public UsersMap() {
            Not.LazyLoad();
            Table("Users");
            Id(t=>t.ID,"ID").GeneratedBy.Assigned();
            Map(t=>t.NAME);
            Map(t => t.PASS);
        }
    }
}
