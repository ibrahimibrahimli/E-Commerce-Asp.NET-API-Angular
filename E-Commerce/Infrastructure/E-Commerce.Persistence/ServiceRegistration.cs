using Microsoft.EntityFrameworkCore;
using E_Commerce.Persistence.Contexts;
using Microsoft.Extensions.DependencyInjection;


namespace E_Commerce.Persistence
{
    public static class ServiceRegistration
    {
        public static void AddPersistenceServices(this IServiceCollection services)
        {
            services.AddDbContext<ApplicationAPIDbContext>(options => options.UseNpgsql(Configuration.ConnectionString));
        }
    }
}
