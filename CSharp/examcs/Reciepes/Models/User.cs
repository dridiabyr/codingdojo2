using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Reciepes.Models;
 
public class User
{
    [Key]
    public int UserId { get; set; }

    [Required(ErrorMessage = "First Name is required"), MinLength(2, ErrorMessage = "First Name must be at least 2 characters")]
    public string FirstName { get; set; }

    [Required(ErrorMessage = "Last Name is required"), MinLength(2, ErrorMessage = "Last Name must be at least 2 characters")]
    public string LastName { get; set; }

    [Required(ErrorMessage = "Email is required"), EmailAddress(ErrorMessage = "Invalid Email format")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Password is required"), MinLength(8, ErrorMessage = "Password must be at least 8 characters long")]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [NotMapped]
    [Required(ErrorMessage = "Please confirm your password")]
    [DataType(DataType.Password)]
    [Compare("Password", ErrorMessage = "Passwords do not match")]
    public string ConfirmPassword { get; set; }

    public List<Recipe> CreatedRecipes { get; set; } = new();
    public List<Rating> Ratings { get; set; } = new();
}