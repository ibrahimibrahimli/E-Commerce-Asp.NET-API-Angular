using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Application.ViewModels.Products
{
    public class VMCreateProduct
    {
        public string  Name { get; set; }
        public int? Stock { get; set; }
        public float? Price { get; set; }
    }
}
