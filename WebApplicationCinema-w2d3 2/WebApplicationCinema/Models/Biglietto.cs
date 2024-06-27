
namespace CinemaTicketApp.Models
{
    public class Ticket
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string TicketType { get; set; } // "Full" o "Reduced"
        public string HallName { get; set; }
    }
}
