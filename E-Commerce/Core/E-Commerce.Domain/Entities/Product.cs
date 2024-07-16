﻿using E_Commerce.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Domain.Entities
{
    public class Product :BaseEntitiy
    {
        public string Name { get; set; }
        public float? Price { get; set; }
        public int? Stock { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
