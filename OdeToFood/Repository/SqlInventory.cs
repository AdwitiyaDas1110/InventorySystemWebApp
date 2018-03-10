using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OdeToFood.Data;
using OdeToFood.Models;

namespace OdeToFood.Repository
{
    public class SqlInventory : IInventory
    {
        private OdeToFoodDbContext _context;

        public SqlInventory(OdeToFoodDbContext context)
        {
            _context = context;
        }
        public void AddToInventory(Product prod)
        {
            _context.Products.Add(prod);
            _context.SaveChanges();
        }

        public void DeleteFromInventory(int id)
        {
            var prod = _context.Products.FirstOrDefault(x => x.Id == id);
            _context.Products.Remove(prod);
            _context.SaveChanges();
        }

        public Product FindItem(int id)
        {
            var prod = _context.Products.First(x => x.Id == id);
            return prod;
        }

        public void UpdateInventory(Product p)
        { 
            _context.Products.Update(p);
            _context.SaveChanges();
        }

        public List<Product> ViewInventory()
        {
            return _context.Products.OrderBy(x => x.Name).ToList();
        }
    }
}
