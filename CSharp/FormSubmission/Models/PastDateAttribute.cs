using System;
using System.ComponentModel.DataAnnotations;

public class PastDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value is DateTime dt && dt < DateTime.Now)
        {
            return ValidationResult.Success;
        }
        return new ValidationResult(ErrorMessage ?? "Date must be in the past.");
    }
}
