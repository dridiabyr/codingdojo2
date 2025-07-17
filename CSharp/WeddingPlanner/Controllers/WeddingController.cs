
using Microsoft.AspNetCore.Mvc;               
using Microsoft.EntityFrameworkCore;          
using System.ComponentModel.DataAnnotations; 
using System.Collections.Generic;             
using System;
public class WeddingController : Controller
{
    private MyContext _context;
    public WeddingController(MyContext context) { _context = context; }

    private int? uid => HttpContext.Session.GetInt32("UserId");

    [HttpGet("weddings")]
    public IActionResult Dashboard()
    {
        if (uid == null) return RedirectToAction("Index", "Home");
        var weddings = _context.Weddings.Include(w => w.Guests).ThenInclude(g => g.User).ToList();
        return View(weddings);
    }

    [HttpGet("weddings/new")]
    public IActionResult New() => uid == null ? RedirectToAction("Index", "Home") : View();

    [HttpPost("weddings/create")]
    public IActionResult Create(Wedding wedding)
    {
        if (uid == null) return RedirectToAction("Index", "Home");
        if (!ModelState.IsValid) return View("New");

        wedding.UserId = uid.Value;
        _context.Add(wedding);
        _context.SaveChanges();
        return RedirectToAction("Dashboard");
    }

    [HttpGet("weddings/{id}")]
    public IActionResult Show(int id)
    {
        var wedding = _context.Weddings.Include(w => w.Guests).ThenInclude(r => r.User).FirstOrDefault(w => w.WeddingId == id);
        return View(wedding);
    }

    [HttpPost("weddings/{id}/rsvp")]
    public IActionResult RSVP(int id)
    {
        if (uid == null) return RedirectToAction("Index", "Home");
        _context.Add(new RSVP { UserId = uid.Value, WeddingId = id });
        _context.SaveChanges();
        return RedirectToAction("Dashboard");
    }

    [HttpPost("weddings/{id}/unrsvp")]
    public IActionResult UnRSVP(int id)
    {
        var rsvp = _context.RSVPs.FirstOrDefault(r => r.UserId == uid && r.WeddingId == id);
        if (rsvp != null)
        {
            _context.Remove(rsvp);
            _context.SaveChanges();
        }
        return RedirectToAction("Dashboard");
    }

    [HttpPost("weddings/{id}/delete")]
    public IActionResult Delete(int id)
    {
        var wedding = _context.Weddings.FirstOrDefault(w => w.WeddingId == id);
        if (wedding.UserId == uid)
        {
            _context.Remove(wedding);
            _context.SaveChanges();
        }
        return RedirectToAction("Dashboard");
    }
}