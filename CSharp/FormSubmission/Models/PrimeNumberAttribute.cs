using System;
using System.ComponentModel.DataAnnotations;

public class PrimeNumberAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value is int num && IsPrime(num))
        {
            return ValidationResult.Success;
        }
        return new ValidationResult(ErrorMessage ?? "Number must be prime.");
    }

    private bool IsPrime(int number)
    {
        if (number < 2) return false;
        for (int i = 2; i <= Math.Sqrt(number); i++)
        {
            if (number % i == 0) return false;
        }
        return true;
    }
}
