using System.ComponentModel.DataAnnotations;

namespace WebApplicationCinema.Models
{
    public class Biglietto
    {
        [Display(Name = "Nome")]
        [Required(ErrorMessage = "Inserire il nome")]
        
        public string Nome { get; set; }

        [Display(Name = "Cognome")]
        [Required(ErrorMessage = "Inserire il cognome")]
        
        public string Cognome { get; set; }

        [Display(Name = "Sala")]
        [Required(ErrorMessage = "Selezionare una sala")]
        public string Sala { get; set; }

        [Display(Name = "Tipo di Biglietto")]
        [Required(ErrorMessage = "Selezionare il tipo di biglietto")]
        public string TipoBiglietto { get; set; } 
    }
}
