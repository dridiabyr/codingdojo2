using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class HomeController : Controller
    {
        [Route("/")]
        public IActionResult Index()
        {
            string message = "Here is a message";
            return View("Index", message);
        }

        [Route("/numbers")]
        public IActionResult Numbers()
        {
            int[] numbers = { 1, 2, 10, 21, 8, 7, 3 };
            return View("Numbers", numbers);
        }

        [Route("/user")]
        public IActionResult SingleUser()
        {
            User user = new User { FirstName = "Neil", LastName = "Gaiman" };
            return View("User", user);
        }

        [Route("/users")]
        public IActionResult Users()
        {
            List<User> users = new List<User>
            {
                new User { FirstName = "Neil", LastName = "Gaiman" },
                new User { FirstName = "Terry", LastName = "Pratchett" },
                new User { FirstName = "Jane", LastName = "Austen" },
                new User { FirstName = "Stephen", LastName = "King" },
                new User { FirstName = "Mary", LastName = "Shelley" },
            };
            return View("Users", users);
        }
    }
}
