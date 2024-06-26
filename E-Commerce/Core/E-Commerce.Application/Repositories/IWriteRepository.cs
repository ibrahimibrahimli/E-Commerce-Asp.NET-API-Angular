using E_Commerce.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Application.Repositories
{
    public interface IWriteRepository<T> : IRepository<T> where T : BaseEntitiy
    {
        Task<bool> AddAsync(T model);
        Task<bool> AddRangeAsync(List<T> datas); 
        bool Remove (T model);
        Task<bool> RemoveAsync (string id);
        bool RemoveRange(List<T> datas);
        bool Update(T model);
        Task<bool> UpdateAsync(List<T> model);
        Task<int> SaveAsync();
    }
}
