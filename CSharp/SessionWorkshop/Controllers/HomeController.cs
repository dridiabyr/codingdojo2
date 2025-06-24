using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers;

public class HomeController : Controller
{

    const string SessionName = "UserName";
    const string SessionCount = "Count";
    public IActionResult Index()
    {
        return View();
    }
[HttpPost]
public IActionResult SubmitName(UserViewModel model) 
{
    if (ModelState.IsValid)
    {
        HttpContext.Session.SetString(SessionName, model.Name);
        HttpContext.Session.SetInt32(SessionCount, 22);
        return RedirectToAction("Dashboard");
    }
    return View("Index");
}

    public IActionResult Dashboard()
    {
        var name = HttpContext.Session.GetString(SessionName);
        var count = HttpContext.Session.GetInt32(SessionCount);

        if (string.IsNullOrEmpty(name) || count == null)
            return RedirectToAction("Index");

        ViewBag.Name = name;
        ViewBag.Count = count;
        return View();
    }

    [HttpPost]
    public IActionResult Process(string action)
    {
        int count = HttpContext.Session.GetInt32(SessionCount) ?? 22;

        switch (action)
        {
            case "+1":
                count += 1; break;
            case "-1":
                count -= 1; break;
            case "x2":
                count *= 2; break;
            case "+random":
                count += new Random().Next(1, 11); break;
        }

        HttpContext.Session.SetInt32(SessionCount, count);
        return RedirectToAction("Dashboard");
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
