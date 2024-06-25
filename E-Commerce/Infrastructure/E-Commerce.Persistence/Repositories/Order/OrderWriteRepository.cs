using E_Commerce.Application.Repositories;
using E_Commerce.Domain.Entities;
using E_Commerce.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Persistence.Repositories
{
    public class OrderWriteRepository : WriteRepository<Order>, IOrderWriteRepository
    {
        public OrderWriteRepository(ApplicationAPIDbContext context) : base(context)
        {
        }
    }
}
