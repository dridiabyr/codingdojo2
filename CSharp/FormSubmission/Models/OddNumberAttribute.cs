using System;
using System.ComponentModel.DataAnnotations;

public class OddNumberAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value is int number && number % 2 != 0)
        {
            return ValidationResult.Success;
        }
        return new ValidationResult(ErrorMessage ?? "Number must be odd.");
    }
}
