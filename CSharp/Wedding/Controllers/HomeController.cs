using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Wedding.Models;

namespace Wedding.Controllers;

public class HomeController : Controller
{
    private MyContext _context;

    public HomeController(MyContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index() => View();

    [HttpPost("register")]
    public IActionResult Register(User newUser)
    {
        if (!ModelState.IsValid) return View("Index");

        PasswordHasher<User> hasher = new();
        newUser.Password = hasher.HashPassword(newUser, newUser.Password);
        _context.Add(newUser);
        _context.SaveChanges();

        HttpContext.Session.SetInt32("UserId", newUser.UserId);
        return RedirectToAction("Dashboard", "Wedding");
    }

    [HttpPost("login")]
    public IActionResult Login(LoginUser user)
    {
        if (!ModelState.IsValid) return View("Index");

        var dbUser = _context.Users.FirstOrDefault(u => u.Email == user.Email);
        if (dbUser == null)
        {
            ModelState.AddModelError("Email", "Invalid Email/Password");
            return View("Index");
        }

        PasswordHasher<LoginUser> hasher = new();
        var result = hasher.VerifyHashedPassword(user, dbUser.Password, user.Password);

        if (result == 0)
        {
            ModelState.AddModelError("Email", "Invalid Email/Password");
            return View("Index");
        }

        HttpContext.Session.SetInt32("UserId", dbUser.UserId);
        return RedirectToAction("Dashboard", "Wedding");
    }

    [HttpGet("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }
}
