public abstract class Vehicle
{
    public string Name { get; set; }
    public bool HasEngine { get; set; }

    public Vehicle(string name, bool hasEngine)
    {
        Name = name;
        HasEngine = hasEngine;
    }
}
