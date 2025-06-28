using System.ComponentModel.DataAnnotations;
namespace Reciepes.Models;

public class Recipe
{
    public int RecipeId { get; set; }
    public string Title { get; set; } = "";
    public string Ingredient1 { get; set; } = "";
    public string Ingredient2 { get; set; } = "";
    public string Ingredient3 { get; set; } = "";
    public string Ingredient4 { get; set; } = "";
    public string Ingredient5 { get; set; } = "";
    public string Instructions { get; set; } = "";
    public bool Vegetarian { get; set; }
    public bool GlutenFree { get; set; }


    public int UserId { get; set; }
    public User? User { get; set; }
    public List<Rating> Ratings { get; set; } = new List<Rating>();
}
