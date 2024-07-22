using System;

namespace ShippingAgency.Models
{
    public class ShipmentStatus
    {
        public int Id { get; set; }

        [Required]
        public int ShipmentId { get; set; }
        public Shipment Shipment { get; set; }

        [Required]
        public string Status { get; set; }

        [Required]
        public string Location { get; set; }

        public string Description { get; set; }

        [Required]
        public DateTime UpdateDateTime { get; set; }
    }
}