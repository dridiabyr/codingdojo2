using System.ComponentModel.DataAnnotations;
namespace Reciepes.Models;

public class Rating
{
    [Key]
    public int RatingId { get; set; }

    [Range(1, 5, ErrorMessage = "Rating must be between 1 and 5")]
    public int Score { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }

    public int RecipeId { get; set; }
    public Recipe Recipe { get; set; }
}