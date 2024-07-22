using Microsoft.EntityFrameworkCore;
using ShippingAgency.Models;

namespace ShippingAgency.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Shipment> Shipments { get; set; }
        public DbSet<ShipmentStatus> ShipmentStatuses { get; set; }
    }
}