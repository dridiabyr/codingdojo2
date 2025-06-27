using System.ComponentModel.DataAnnotations;

namespace FirstConnection.Models;

public class Pet
{
    [Key]
    public int PetId { get; set; }
    [Required]
    public string? Name { get; set; }

    [Required]
    public string? PetType { get; set; }

    [Required]
    [Range(0, 100)]
    public int Age { get; set; }

    public bool HasFur { get; set; }
}