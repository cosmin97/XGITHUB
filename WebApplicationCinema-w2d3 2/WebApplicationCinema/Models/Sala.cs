
namespace CinemaTicketApp.Models
{
    public class CinemaHall
    {
        public string HallName { get; set; }
        public int TotalSeats { get; set; } = 120;
        public int TicketsSold { get; set; }
        public int ReducedTicketsSold { get; set; }
    }
}
