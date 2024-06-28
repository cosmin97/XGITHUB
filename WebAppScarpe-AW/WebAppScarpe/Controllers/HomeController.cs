
using Microsoft.AspNetCore.Mvc;

namespace WebAppScarpe.Controllers
{
    public class HomeController : Controller
    {
        // Pagina principale
        public IActionResult HomePage()
        {
            return View();
        }

        // Dettagli dell'articolo
        public IActionResult VisualizzaDettagli(int idArticolo)
        {
            return View();
        }

        // Form per creare un nuovo articolo
        public IActionResult CreaArticolo()
        {
            return View();
        }

        // Post per salvare un nuovo articolo
        [HttpPost]
        public IActionResult CreaArticolo(ArticleInputModel articolo)
        {
            if (ModelState.IsValid)
            {
                // Salvataggio articolo
                return RedirectToAction("HomePage");
            }
            return View(articolo);
        }
    }
}
