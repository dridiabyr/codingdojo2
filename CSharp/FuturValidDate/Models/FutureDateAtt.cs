using System;
using System.ComponentModel.DataAnnotations;

namespace FuturValidDate.Models
{
    public class FutureDateAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is DateTime submittedDate)
            {
                if (submittedDate > DateTime.Now)
                {
                    return new ValidationResult("The date cannot be in the future.");
                }
                return ValidationResult.Success;
            }

            return new ValidationResult("Invalid date format.");
        }
    }
}
