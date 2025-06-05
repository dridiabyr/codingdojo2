using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{

    public class PortfolioController : Controller
    {
        // Portfolio 
        [HttpGet("")]
        public string Index()
        {
            return "this is my index !";
        }

        // Projects 
        [HttpGet("projects")]
        public string Projects()
        {
            return "these are my projects !";
        }

        //contact 
        [HttpGet("contact")]
        public string contact()
        {
            return "this is my contat ";
        }
    }
}