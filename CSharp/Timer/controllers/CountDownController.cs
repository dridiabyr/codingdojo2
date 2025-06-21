using Microsoft.AspNetCore.Mvc;
using System;

public class CountDownController : Controller
{
    public IActionResult Index()
    {
        DateTime currentTime = DateTime.Now;
        DateTime endTime = new DateTime(2025, 12, 25, 7, 0, 0);
        TimeSpan timeLeft = endTime - currentTime;

        ViewBag.StartTime = currentTime;
        ViewBag.EndTime = endTime;
        ViewBag.DaysLeft = timeLeft.Days;
        ViewBag.HoursLeft = timeLeft.Hours;
        ViewBag.MinutesLeft = timeLeft.Minutes;
        ViewBag.SecondsLeft = timeLeft.Seconds;

        return View();
    }
}
