using System.ComponentModel.DataAnnotations;

namespace Wedding.Models;

public class Wedding
{
    [Key]
    public int WeddingId { get; set; }

    [Required]
    public string WedderOne { get; set; }

    [Required]
    public string WedderTwo { get; set; }

    [Required]
    [FutureDate]
    public DateTime Date { get; set; }

    [Required]
    public string Address { get; set; }

    public int UserId { get; set; }
    public User? Planner { get; set; }

    public List<RSVP> RSVPs { get; set; } = new();
}
