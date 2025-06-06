using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        List<string> messages = new List<string>
        {
            "apple Pie",
            "Pizza",
            "cinnamon Rolls",
            "Choclat Cake",
            "Burritos",
            "Lasagne",
            "Donuts"
        };

        return View(messages);
    }
}
