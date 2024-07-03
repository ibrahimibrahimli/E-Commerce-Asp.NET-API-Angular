using E_Commerce.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Domain.Entities
{
    public class Order : BaseEntitiy
    {
        public Guid CustomerId { get; set; }
        public string  Description { get; set; }
        public string Adress { get; set; }

        public ICollection<Product> Products { get; set; }
        public virtual Customer Customer { get; set; }
    }
}
