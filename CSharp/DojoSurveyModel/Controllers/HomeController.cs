using Microsoft.AspNetCore.Mvc;
using DojoSurveyModel.Models;
using System.Diagnostics;

namespace DojoSurveyModel.Controllers;

public class HomeController : Controller
{
    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("submit")]
    public IActionResult Submit(Survey formData)
    {
        return View("Results", formData);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
