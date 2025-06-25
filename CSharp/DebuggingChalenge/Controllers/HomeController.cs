using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DebuggingChalenge.Models;

namespace DebuggingChalenge.Controllers;

public class HomeController : Controller
{   private const string SessionName = "UserName";
    private const string SessionLocation = "UserLocation";    public IActionResult Index()
    {
        return View();
    }
    [HttpPost]
    public IActionResult Submit(UserViewModel model)
    {
        if (!ModelState.IsValid)
        {
            return View("Index", model);
        }

        HttpContext.Session.SetString(SessionName, model.Name);
        HttpContext.Session.SetString(SessionLocation, string.IsNullOrWhiteSpace(model.Location) ? "Undisclosed" : model.Location);

        return RedirectToAction("Generate");
    }

    public IActionResult Generate()
    {
        if (string.IsNullOrEmpty(HttpContext.Session.GetString(SessionName)))
        {
            return RedirectToAction("Index");
        }

        string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random rand = new Random();
        string passcode = new string(Enumerable.Repeat(chars, 14)
            .Select(s => s[rand.Next(s.Length)]).ToArray());

        ViewBag.Passcode = passcode;
        ViewBag.UserName = HttpContext.Session.GetString(SessionName);
        ViewBag.UserLocation = HttpContext.Session.GetString(SessionLocation);

        return View();
    }

    [HttpPost]
    public IActionResult NewCode()
    {
        return RedirectToAction("Generate");
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
