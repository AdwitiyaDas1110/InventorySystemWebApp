using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OdeToFood.Models;
using OdeToFood.Repository;

namespace OdeToFood.Controllers
{
    
    public class HomeController : Controller
    {
        
        public IActionResult Index()
        {
             return View();
        }
    }
}
