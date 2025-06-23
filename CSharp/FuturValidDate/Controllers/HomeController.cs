using Microsoft.AspNetCore.Mvc;
using FuturValidDate.Models;

namespace FuturValidDate.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("submit")]
        public IActionResult Submit(User user)
        {
            if (!ModelState.IsValid)
            {
                return View("Index", user);
            }

            return View("Success", user);
        }
    }
}
