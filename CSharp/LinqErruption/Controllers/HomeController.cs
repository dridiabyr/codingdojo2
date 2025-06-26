using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LinqErruption.Models;

namespace LinqErruption.Controllers;

public class HomeController : Controller
{
    private static List<Eruption> eruptions = new List<Eruption>()
    {
        new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
        new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
        new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
        new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
        new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
        new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
        new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
        new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
        new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
        new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
        new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
        new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
        new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
    };
    public IActionResult Index()
     {
        var chile = eruptions.FirstOrDefault(e => e.Location == "Chile");
        var hawaiian = eruptions.FirstOrDefault(e => e.Location == "Hawaiian Is") ?? new Eruption("No Hawaiian Is Eruption found", 0, "", 0, "");
        var greenland = eruptions.FirstOrDefault(e => e.Location == "Greenland") ?? new Eruption("No Greenland Eruption found", 0, "", 0, "");
        var newZealand = eruptions.FirstOrDefault(e => e.Location == "New Zealand" && e.Year > 1900);

        var highElevation = eruptions.Where(e => e.ElevationInMeters > 2000);
        var startsWithL = eruptions.Where(e => e.Volcano.StartsWith("L")).ToList();
        var maxElevation = eruptions.Max(e => e.ElevationInMeters);
        var volcanoWithMax = eruptions.FirstOrDefault(e => e.ElevationInMeters == maxElevation);
        var alphabetical = eruptions.OrderBy(e => e.Volcano).ToList();
        var elevationSum = eruptions.Sum(e => e.ElevationInMeters);
        var anyIn2000 = eruptions.Any(e => e.Year == 2000);
        var top3Strato = eruptions.Where(e => e.Type == "Stratovolcano").Take(3);
        var before1000 = eruptions.Where(e => e.Year < 1000).OrderBy(e => e.Volcano).ToList();
        var namesBefore1000 = before1000.Select(e => e.Volcano).ToList();

        ViewBag.Chile = chile;
        ViewBag.Hawaiian = hawaiian;
        ViewBag.Greenland = greenland;
        ViewBag.NewZealand = newZealand;
        ViewBag.HighElevation = highElevation;
        ViewBag.StartsWithL = startsWithL;
        ViewBag.MaxElevation = maxElevation;
        ViewBag.VolcanoWithMax = volcanoWithMax;
        ViewBag.Alphabetical = alphabetical;
        ViewBag.ElevationSum = elevationSum;
        ViewBag.AnyIn2000 = anyIn2000;
        ViewBag.Top3Strato = top3Strato;
        ViewBag.Before1000 = before1000;
        ViewBag.NamesBefore1000 = namesBefore1000;

        return View();
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
