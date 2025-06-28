using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Reciepes.Models;

namespace Reciepes.Controllers
{
    public class RecipeController : Controller
    {
        private readonly MyContext _context;
        public RecipeController(MyContext context) => _context = context;

        private int? UserId => HttpContext.Session.GetInt32("UserId");

        private bool IsLoggedIn => UserId != null;

        [HttpGet]
        public IActionResult New()
        {
            if (!IsLoggedIn) return RedirectToAction("Index", "Home");
            return View();
        }

        [HttpPost]
        public IActionResult Create(Recipe recipe)
        {
            if (!IsLoggedIn) return RedirectToAction("Index", "Home");

            if (ModelState.IsValid)
            {
                recipe.UserId = UserId.Value;
                _context.Recipes.Add(recipe);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("New");
        }


    }
}
