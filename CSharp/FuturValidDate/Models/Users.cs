using System;
using System.ComponentModel.DataAnnotations;
namespace FuturValidDate.Models
{
    public class User
    {
        [Required]
        public string Name { get; set; }

        [FutureDate(ErrorMessage = "Date cannot be in the future.")]
        public DateTime Birthdate { get; set; }
    }
}
