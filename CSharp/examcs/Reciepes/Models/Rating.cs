using System.ComponentModel.DataAnnotations;
namespace Reciepes.Models;

public class Rating
{
    public int Id { get; set; }
    public int Score { get; set; }
    public int RecipeId { get; set; }
    public Recipe? Recipe { get; set; }
    public int UserId { get; set; }
    public User? User { get; set; }
    public int Value { get; set; } 
}