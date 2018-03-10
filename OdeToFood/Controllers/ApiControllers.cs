using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OdeToFood.Models;
using OdeToFood.Repository;

namespace OdeToFood.Controllers
{
    [Route("api/[controller]")]
    public class ApiControllers : Controller
    {
        IInventory _inventory;

        public ApiControllers(IInventory inventory)
        {
            _inventory = inventory;
        }


        [HttpGet("[action]")]
        public List<Product> ViewInventory()
        {
            var model = _inventory.ViewInventory();
            return model;
        }


        

        [HttpPost("[action]")]
        public void Add([FromBody]Product prod)
        {
            var p = new Product();
            p.Name = prod.Name;
            p.Price = prod.Price;
            p.Quantity = prod.Quantity;
            p.Type = prod.Type;
            _inventory.AddToInventory(p);
        }

        [HttpDelete("Delete/{id}")]
        public void Delete([FromRoute] int id)
        {
            _inventory.DeleteFromInventory(id);
        }

        [HttpGet("Find/{id}")]
        public Product Find(int id)
        {
            var prod = _inventory.FindItem(id);
            return prod;
        }

        [HttpPut("[action]")]
        public void Edit([FromBody]Product p)
        {
            _inventory.UpdateInventory(p);
        }
    }
}
