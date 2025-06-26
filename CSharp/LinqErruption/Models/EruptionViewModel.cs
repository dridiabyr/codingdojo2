using System.Collections.Generic;

namespace LinqErruption.Models;

public class EruptionViewModel
{
    public IEnumerable<Eruption> Eruptions { get; set; } = new List<Eruption>();
    public string Title { get; set; } = "";
}
