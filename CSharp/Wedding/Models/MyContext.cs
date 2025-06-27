using Microsoft.EntityFrameworkCore;

namespace Wedding.Models;

public class MyContext : DbContext
{
    public MyContext(DbContextOptions options) : base(options) {}

    public DbSet<User> Users { get; set; }
    public DbSet<Wedding> Weddings { get; set; }
    public DbSet<RSVP> RSVPs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<RSVP>()
            .HasKey(r => new { r.UserId, r.WeddingId });
    }
}
