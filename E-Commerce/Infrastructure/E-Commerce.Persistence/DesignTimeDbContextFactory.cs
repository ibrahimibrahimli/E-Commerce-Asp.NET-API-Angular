using E_Commerce.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Persistence
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<ApplicationAPIDbContext>
    {
        public ApplicationAPIDbContext CreateDbContext(string[] args)
        {
            

            DbContextOptionsBuilder<ApplicationAPIDbContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseNpgsql(Configuration.ConnectionString);
            return new(dbContextOptionsBuilder.Options);
        }
    }
}
