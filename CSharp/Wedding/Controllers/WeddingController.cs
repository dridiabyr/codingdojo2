using Microsoft.AspNetCore.Mvc;

namespace Wedding.Controllers;

public class WeddingController : Controller
{
    
    [HttpGet]
    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Create(string BrideName, string GroomName, DateTime WeddingDate)
    {

        ViewBag.Message = $"Wedding for {BrideName} and {GroomName} on {WeddingDate.ToShortDateString()} created!";
        return View();
    }
    

}
