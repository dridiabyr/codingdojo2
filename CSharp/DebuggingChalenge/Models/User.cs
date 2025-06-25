using System.ComponentModel.DataAnnotations;

namespace DebuggingChalenge.Models
{
    public class UserViewModel
    {
        [Required(ErrorMessage = "Name is required.")]
        public required string Name { get; set; }

        public string? Location { get; set; }
    }
}
