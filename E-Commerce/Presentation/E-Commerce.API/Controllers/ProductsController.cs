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

        private readonly IOrderWriteRepository _orderWriteRepository;

        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository, IOrderWriteRepository orderWriteRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
            _orderWriteRepository = orderWriteRepository;
        }

        [HttpGet]   
        public async Task Get()
        {
           await _orderWriteRepository.AddAsync(new() { Description = "orderr 1", Adress = "baku"});
           await _orderWriteRepository.AddAsync(new() { Description = "orderr 2", Adress = "Sumgait"});
                
            await _orderWriteRepository.SaveAsync();
        }

        
    }
}
