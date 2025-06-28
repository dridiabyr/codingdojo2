using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reciepes.Models;
using Microsoft.AspNetCore.Http;
using System.Linq;
using Reciepes.Data;

namespace Reciepes.Controllers
{
    public class RecipeController : Controller
    {
        private readonly MyContext _context;

        public RecipeController(MyContext context)
        {
            _context = context;
        }

        // List all recipes
        public IActionResult Index()
        {
            var recipes = _context.Recipes
                .Include(r => r.User)
                .Include(r => r.Ratings)
                .ToList();

            // Optional: get current user's ratings for display
            int? userId = HttpContext.Session.GetInt32("UserId");
            if (userId.HasValue)
            {
                var myRatings = _context.Ratings.Where(r => r.UserId == userId.Value).ToList();
                ViewBag.MyRatings = myRatings;
            }

            return View(recipes);
        }

         public IActionResult Details(int id)
        {
            var recipe = _context.Recipes
                .Include(r => r.User)
                .Include(r => r.Ratings)
                .FirstOrDefault(r => r.RecipeId == id);

            if (recipe == null)
                return NotFound();

            return View(recipe);
        }

        [HttpGet]
        public IActionResult New()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Recipe recipe)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if (!userId.HasValue)
                return RedirectToAction("Index", "Home"); // not logged in

            if (ModelState.IsValid)
            {
                recipe.UserId = userId.Value;
                _context.Recipes.Add(recipe);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("New");
        }

public IActionResult New()
{
    return View();
}
        [HttpGet]
        public IActionResult Edit(int id)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if (!userId.HasValue)
                return RedirectToAction("Index", "Home"); // not logged in

            var recipe = _context.Recipes.FirstOrDefault(r => r.RecipeId == id && r.UserId == userId.Value);
            if (recipe == null)
                return NotFound();

            return View(recipe);
        }


        [HttpPost]
        public IActionResult Update(Recipe updatedRecipe)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if (!userId.HasValue)
                return RedirectToAction("Index", "Home");

            if (ModelState.IsValid)
            {
                var recipe = _context.Recipes.FirstOrDefault(r => r.RecipeId == updatedRecipe.RecipeId && r.UserId == userId.Value);
                if (recipe == null)
                    return NotFound();

                recipe.Title = updatedRecipe.Title;
                recipe.Ingredient1 = updatedRecipe.Ingredient1;
                recipe.Ingredient2 = updatedRecipe.Ingredient2;
                recipe.Ingredient3 = updatedRecipe.Ingredient3;
                recipe.Ingredient4 = updatedRecipe.Ingredient4;
                recipe.Ingredient5 = updatedRecipe.Ingredient5;
                recipe.Instructions = updatedRecipe.Instructions;
                recipe.Vegetarian = updatedRecipe.Vegetarian;
                recipe.GlutenFree = updatedRecipe.GlutenFree;

                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("Edit", updatedRecipe);
        }
    }
}
