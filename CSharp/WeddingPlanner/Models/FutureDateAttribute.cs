
namespace WeddingPlanner.Models;

public class FutureDateAttribute : ValidationAttribute
{
    public override bool IsValid(object value)
    {
        return value is DateTime dt && dt > DateTime.Now;
    }
}
