using System.ComponentModel.DataAnnotations;

namespace Wedding.Models;

public class FutureDateAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value is DateTime dt && dt < DateTime.Now)
        {
            return new ValidationResult("Date must be in the future.");
        }
        return ValidationResult.Success;
    }
}
