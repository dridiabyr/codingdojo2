using System.ComponentModel.DataAnnotations;
namespace Reciepes.Models;

public class Recipe
{
    [Key]
    public int RecipeId { get; set; }

    [Required(ErrorMessage = "Title is required")]
    public string Title { get; set; }

    [Required(ErrorMessage = "Ingredient 1 is required")]
    public string Ingredient1 { get; set; }

    [Required(ErrorMessage = "Ingredient 2 is required")]
    public string Ingredient2 { get; set; }

    [Required(ErrorMessage = "Ingredient 3 is required")]
    public string Ingredient3 { get; set; }

    [Required(ErrorMessage = "Ingredient 4 is required")]
    public string Ingredient4 { get; set; }

    [Required(ErrorMessage = "Ingredient 5 is required")]
    public string Ingredient5 { get; set; }

    [Required(ErrorMessage = "Instructions are required")]
    public string Instructions { get; set; }

    public bool Vegetarian { get; set; }
    public bool GlutenFree { get; set; }

    public int UserId { get; set; }
    public User Creator { get; set; }

    public List<Rating> Ratings { get; set; } = new();
}