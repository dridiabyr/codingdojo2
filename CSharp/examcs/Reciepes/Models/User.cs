using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Reciepes.Models;

public class User
{
    public int UserId { get; set; }
    [Required, MinLength(2)]
    public string FirstName { get; set; } = "";
    [Required, MinLength(2)]
    public string LastName { get; set; } = "";
    [Required, EmailAddress]
    public string Email { get; set; } = "";
    [Required, MinLength(8)]
    public string Password { get; set; } = "";
    [Required]
    [Compare("Password", ErrorMessage = "Passwords do not match.")]
    [DataType(DataType.Password)]
    public string ConfirmPassword { get; set; } = "";
    public List<Rating> Ratings { get; set; } = new();

    public static string HashPassword(string password)
    {
        // Simple hash demo (not secure)
        return Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(password));
    }
    public bool VerifyPassword(string password)
    {
        return Password == HashPassword(password);
    }
}