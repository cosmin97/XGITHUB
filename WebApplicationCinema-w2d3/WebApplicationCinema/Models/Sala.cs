namespace WebApplicationCinema.Models
{
    public class Sala
    {
        public string Nome { get; set; }
        public int PostiDisponibili { get; set; } = 120;
        public int BigliettiVenduti { get; set; } = 0;
        public int BigliettiRidotti { get; set; } = 0;
    }
}
