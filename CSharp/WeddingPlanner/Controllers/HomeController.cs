using Microsoft.AspNetCore.Mvc;               // For Controller, IActionResult, HttpGet, HttpPost
using Microsoft.EntityFrameworkCore;          // For DbContext, DbSet
using System.ComponentModel.DataAnnotations; // For [Required], [Key], [EmailAddress], etc.
using System.Collections.Generic;             // For List<>
using System;
public class HomeController : Controller
{
    private MyContext _context;
    public HomeController(MyContext context) { _context = context; }

    [HttpGet("")]
    public IActionResult Index() => View();

    [HttpPost("register")]
    public IActionResult Register(User newUser)
    {
        if (_context.Users.Any(u => u.Email == newUser.Email))
            ModelState.AddModelError("Email", "Email already in use");

        if (ModelState.IsValid)
        {
            PasswordHasher<User> hasher = new();
            newUser.Password = hasher.HashPassword(newUser, newUser.Password);
            _context.Add(newUser);
            _context.SaveChanges();
            HttpContext.Session.SetInt32("UserId", newUser.UserId);
            return RedirectToAction("Dashboard", "Wedding");
        }
        return View("Index");
    }

    [HttpPost("login")]
    public IActionResult Login(LoginUser loginUser)
    {
        if (!ModelState.IsValid) return View("Index");
        var user = _context.Users.FirstOrDefault(u => u.Email == loginUser.Email);
        if (user == null) return View("Index");

        PasswordHasher<LoginUser> hasher = new();
        var result = hasher.VerifyHashedPassword(loginUser, user.Password, loginUser.Password);
        if (result == PasswordVerificationResult.Failed) return View("Index");

        HttpContext.Session.SetInt32("UserId", user.UserId);
        return RedirectToAction("Dashboard", "Wedding");
    }

    [HttpGet("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }
}
