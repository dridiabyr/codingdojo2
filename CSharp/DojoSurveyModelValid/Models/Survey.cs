using System.ComponentModel.DataAnnotations;

namespace DojoSurveyModelValid.Models
{
    public class Survey
    {
        [Required(ErrorMessage = "Name is required.")]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters.")]
        public required string Name { get; set; }

        [Required(ErrorMessage = "Location is required.")]
        public required string Location { get; set; }

        [Required(ErrorMessage = "Language is required.")]
        public required string Language { get; set; }

        [MinLength(20, ErrorMessage = "Comment must be at least 20 characters if provided.")]
        public string? Comment { get; set; }
    }
}