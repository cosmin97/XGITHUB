using System;
using System.ComponentModel.DataAnnotations;

namespace ShippingAgency.Models
{
    public class Shipment
    {
        public int Id { get; set; }

        [Required]
        public int ClientId { get; set; }
        public Client Client { get; set; }

        [Required]
        public string Identifier { get; set; }

        [Required]
        public DateTime ShippingDate { get; set; }

        public double Weight { get; set; }

        [Required]
        public string DestinationCity { get; set; }

        [Required]
        public string DestinationAddress { get; set; }

        [Required]
        public string RecipientName { get; set; }

        [Required]
        public double ShippingCost { get; set; }

        public DateTime? ExpectedDeliveryDate { get; set; }
    }
}