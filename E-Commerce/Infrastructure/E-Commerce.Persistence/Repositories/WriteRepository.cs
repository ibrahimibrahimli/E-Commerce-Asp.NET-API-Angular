using E_Commerce.Application.Repositories;
using E_Commerce.Domain.Entities.Common;
using E_Commerce.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace E_Commerce.Persistence.Repositories
{
    public class WriteRepository<T> : IWriteRepository<T> where T : BaseEntitiy
    {
        private readonly ApplicationAPIDbContext _context;

        public WriteRepository(ApplicationAPIDbContext context)
        {
            _context = context;
        }

        public DbSet<T> Table => _context.Set<T>();

        public async Task<bool> AddAsync(T model)
        {
            EntityEntry<T> entityEntry = await Table.AddAsync(model);
            return entityEntry.State == EntityState.Added;
        }

        public async Task<bool> AddRangeAsync(List<T> datas)
        {
           await Table.AddRangeAsync(datas);
            return true;
        }

        public bool Remove(T model)
        {
            EntityEntry<T> entityEntry = Table.Remove(model);
            return entityEntry.State == EntityState.Deleted;
        }

        public async Task<bool> RemoveAsync(string id)
        {
           

            if(Guid.TryParse(id, out var entityId))
            {
                T model = await Table.FirstOrDefaultAsync(data => data.Id == Guid.Parse(id));
                return Remove(model);
            }
            else
            {
                return false;
            }

            
        }

        public bool RemoveRange(List<T> datas)
        {
            Table.RemoveRange(datas);
            return true;
        }

        public bool Update(T model)
        {
            EntityEntry entityEntry = Table.Update(model);
            return entityEntry.State == EntityState.Modified;
        }

        public Task<bool> UpdateAsync(List<T> model)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveAsync()
        => await _context.SaveChangesAsync();

        
    }
}
