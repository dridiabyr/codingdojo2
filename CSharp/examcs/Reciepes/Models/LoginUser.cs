using System.ComponentModel.DataAnnotations;
namespace Reciepes.Models;

public class LoginUser
{
    [Required(ErrorMessage = "Email is required"), EmailAddress(ErrorMessage = "Invalid Email format")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Password is required")]
    [DataType(DataType.Password)]
    public string Password { get; set; }
}