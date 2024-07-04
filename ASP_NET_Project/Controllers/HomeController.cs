
using Microsoft.AspNetCore.Mvc;

namespace esp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
