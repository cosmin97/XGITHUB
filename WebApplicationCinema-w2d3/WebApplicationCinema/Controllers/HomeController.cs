using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using WebApplicationCinema.Models;

namespace WebApplicationCinema.Controllers
{
    public class HomeController : Controller
    {
        private static List<Biglietto> biglietti = new List<Biglietto>();
        private static List<Sala> sale = new List<Sala>
        {
            new Sala { Nome = "SALA NORD" },
            new Sala { Nome = "SALA EST" },
            new Sala { Nome = "SALA SUD" }
        };

        public IActionResult Index()
        {
            ViewBag.Sale = sale;
            ViewBag.Biglietti = biglietti;
            return View(new Biglietto());
        }

        [HttpPost]
        public IActionResult Prenota(Biglietto biglietto)
        {
            var sala = sale.FirstOrDefault(s => s.Nome == biglietto.Sala);
            if (sala != null && sala.PostiDisponibili > 0)
            {
                sala.BigliettiVenduti++;
                sala.PostiDisponibili--;
                if (biglietto.TipoBiglietto == "Ridotto")
                {
                    sala.BigliettiRidotti++;
                }
                biglietti.Add(biglietto);
            }
            return RedirectToAction("Index");
        }

        public IActionResult Lista()
        {
            return View(biglietti);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
