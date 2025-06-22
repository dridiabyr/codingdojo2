using Microsoft.AspNetCore.Mvc;
using DojoSurveyModelValid.Models;
using System.Diagnostics;

namespace DojoSurveyModelValid.Controllers;

    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();  // Show empty form
        }

        [HttpPost("submit")]
        public IActionResult Submit(Survey formData)
        {
            if (!ModelState.IsValid)
            {

                return View("Index", formData);
            }

            var resultVM = new Survey
            {
                Name = formData.Name,
                Location = formData.Location,
                Language = formData.Language,
                Comment = formData.Comment
            };

            return View("Results", resultVM);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
