using E_Commerce.Application.Repositories;
using E_Commerce.Domain.Entities.Common;
using E_Commerce.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Persistence.Repositories
{
    public class ReadRepository<T> : IReadRepository<T> where T : BaseEntitiy
    {
        private readonly ApplicationAPIDbContext _context;

        public ReadRepository(ApplicationAPIDbContext context)
        {
            _context = context;
        }

        public DbSet<T> Table => _context.Set<T>();

        public IQueryable<T> GetAll()
            => Table;

        public IQueryable<T> GetWhere(Expression<Func<T, bool>> method)
        =>Table.Where(method);

        public async Task<T> GetSingleAsync(Expression<Func<T, bool>> method)
        => await Table.FirstOrDefaultAsync(method);
        public async Task<T> GetByIdAsync(string id)
        => await Table.FirstOrDefaultAsync(data => data.Id == Guid.Parse(id));
        

    }
}
