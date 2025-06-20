using Microsoft.AspNetCore.Mvc;


    public class PortfolioController : Controller
    {
        // Portfolio 
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        // Projects 
        [HttpGet("projects")]
        public IActionResult Projects()
        {
            return View();
        }

        //contact 
        [HttpGet("contact")]
        public IActionResult contact()
        {
            return View();
        }
    }
