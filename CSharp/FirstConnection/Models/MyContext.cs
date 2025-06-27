using Microsoft.EntityFrameworkCore;

namespace FirstConnection.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }

        public DbSet<Pet> Pets { get; set; }
    }
}
