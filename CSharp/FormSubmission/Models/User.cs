using System;
using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models;

public class User
{

 
        [Required(ErrorMessage = "Name is required.")]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Date of birth is required.")]
        [PastDate(ErrorMessage = "Date must be in the past.")]
        public DateTime DateOfBirth { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters.")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Favorite number is required.")]
        [OddNumber(ErrorMessage = "Must be a whole odd number.")]
        public int FavoriteNumber { get; set; }
}