using E_Commerce.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Domain.Entities
{
    public class Customer :BaseEntitiy
    {
        public ICollection<Order> Orders { get; set; }
    }
}
