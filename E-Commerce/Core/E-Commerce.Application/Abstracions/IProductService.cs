﻿using E_Commerce.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Application.Abstracions
{
    public interface IProductService
    {
        List<Product> GetProducts();
    }
}
