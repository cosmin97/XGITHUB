
using Microsoft.AspNetCore.Mvc;
using CinemaTicketApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace CinemaTicketApp.Controllers
{
    public static class DataRepository
    {
        public static List<CinemaHall> Halls = new List<CinemaHall>
        {
            new CinemaHall { HallName = "SALA NORD" },
            new CinemaHall { HallName = "SALA EST" },
            new CinemaHall { HallName = "SALA SUD" }
        };

        public static List<Ticket> Tickets = new List<Ticket>();
    }

    public class TicketsController : Controller
    {
        public IActionResult Index()
        {
            return View(DataRepository.Halls);
        }

        [HttpPost]
        public IActionResult Purchase(Ticket ticket)
        {
            var hall = DataRepository.Halls.FirstOrDefault(h => h.HallName == ticket.HallName);
            if (hall != null && hall.TicketsSold < hall.TotalSeats)
            {
                DataRepository.Tickets.Add(ticket);
                hall.TicketsSold++;
                if (ticket.TicketType == "Reduced")
                {
                    hall.ReducedTicketsSold++;
                }
            }
            return RedirectToAction("Index");
        }
    }
}
