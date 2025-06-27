namespace Wedding.Models;

public class RSVP
{
    public int UserId { get; set; }
    public User? User { get; set; }

    public int WeddingId { get; set; }
    public Wedding? Wedding { get; set; }
}
