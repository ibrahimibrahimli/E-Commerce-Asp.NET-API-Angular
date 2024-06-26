using E_Commerce.Application.Repositories;
using E_Commerce.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace E_Commerce.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductWriteRepository _productWriteRepository;
        private readonly IProductReadRepository _productReadRepository;

        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
        }

        [HttpGet]   
        public async Task Get()
        {
            await _productWriteRepository.AddRangeAsync(new()
            {
                new(){Id = Guid.NewGuid() , Name = "Product 1", Price = 66, Stock = 300},
                new(){Id = Guid.NewGuid() , Name = "Product 2", Price = 46, Stock = 300},
                new(){Id = Guid.NewGuid() , Name = "Product 3", Price = 645, Stock = 300},
                new(){Id = Guid.NewGuid() , Name = "Product 4", Price = 64, Stock = 300},
            });
                
            await _productWriteRepository.SaveAsync();
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> Get(string id)
        {
            Product product = await _productReadRepository.GetByIdAsync(id);
            return Ok(product);
        }
    }
}
