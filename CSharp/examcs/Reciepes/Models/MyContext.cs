using Microsoft.EntityFrameworkCore;
namespace Reciepes.Models;

public class MyContext : DbContext
{
    public MyContext(DbContextOptions options) : base(options) {}

    public DbSet<User> Users { get; set; }
    public DbSet<Recipe> Recipes { get; set; }
    public DbSet<Rating> Ratings { get; set; }
}