using System.ComponentModel.DataAnnotations;

namespace ShippingAgency.Models
{
    public class Client
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string FiscalCodeOrVAT { get; set; }

        [Required]
        public bool IsCompany { get; set; }
    }
}