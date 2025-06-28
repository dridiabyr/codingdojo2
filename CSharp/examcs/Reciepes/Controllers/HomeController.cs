using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Reciepes.Models;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace Reciepes.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    public HomeController(MyContext context) { _context = context; }

    [HttpGet]
    public IActionResult Index() => View("Login");

[HttpGet("/register")]
    public IActionResult Register()
    {
        return View();
    }
[HttpPost("register")]
public IActionResult Register(User newUser)
{
    if (_context.Users.Any(u => u.Email == newUser.Email))
    {
        ModelState.AddModelError("Email", "Email already in use");
    }

    if (ModelState.IsValid)
    {
        PasswordHasher<User> hasher = new();
        newUser.Password = hasher.HashPassword(newUser, newUser.Password);
        _context.Users.Add(newUser);
        _context.SaveChanges();
        HttpContext.Session.SetInt32("UserId", newUser.UserId);
        return RedirectToAction("Index", "Recipe");
    }

    return View("Register");
}

    [HttpPost]
    public IActionResult Login(LoginUser loginUser)
    {
        if (ModelState.IsValid)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == loginUser.Email);
            if (user != null)
            {
                PasswordHasher<LoginUser> hasher = new();
                var result = hasher.VerifyHashedPassword(loginUser, user.Password, loginUser.Password);
                if (result == PasswordVerificationResult.Success)
                {
                    HttpContext.Session.SetInt32("UserId", user.UserId);
                    return RedirectToAction("Index", "Recipe");
                }
            }
            ModelState.AddModelError("Email", "Invalid login");
        }
        return View("Login");
    }

    [HttpPost]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
