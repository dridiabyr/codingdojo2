using Microsoft.AspNetCore.Mvc;

public class DojoSurveyController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Submit(string name, string location, string language, string comment)
    {


        ViewBag.Name = name;
        ViewBag.Location = location;
        ViewBag.Language = language;
        ViewBag.Comment = comment;

        return View("Result");
    }

    [HttpGet]
    public IActionResult Submit() {
        return RedirectToAction("Index");
    }
}

