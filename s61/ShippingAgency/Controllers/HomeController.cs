using Microsoft.AspNetCore.Mvc;

namespace ShippingAgency.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}