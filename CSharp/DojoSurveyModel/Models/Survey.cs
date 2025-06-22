namespace DojoSurveyModel.Models
{
    public class Survey
    {
        public required string Name { get; set; }
        public required string Location { get; set; }
        public required string Language { get; set; }
        public string Comment { get; set; }
    }
}