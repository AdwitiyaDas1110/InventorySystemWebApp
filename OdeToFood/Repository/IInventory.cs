using System.Collections.Generic;
using OdeToFood.Models;

namespace OdeToFood.Repository
{
    public interface IInventory
    {
        List<Product> ViewInventory();
        Product FindItem(int id);
        void AddToInventory(Product prod);
        void UpdateInventory(Product p);
        void DeleteFromInventory(int id);
    }
}
