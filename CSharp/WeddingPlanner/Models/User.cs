namespace WeddingPlanner.Models;


public class User
{
    [Key]
    public int UserId { get; set; }

    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set; }

    [Required, EmailAddress]
    public string Email { get; set; }

    [Required, MinLength(8)]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    public List<Wedding> WeddingsCreated { get; set; } = new();
    public List<RSVP> RSVPs { get; set; } = new();
}
