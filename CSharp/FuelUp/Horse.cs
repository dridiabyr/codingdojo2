using System;

public class Horse : Vehicle, INeedFuel
{
    public string FuelType { get; set; }
    public int FuelTotal { get; set; }

    public Horse(string name) : base(name, true)
    {
        FuelType = "Hay";
        FuelTotal = 10;
    }

    public void GiveFuel(int amount)
    {
        FuelTotal += amount;
        Console.WriteLine($"{Name} received {amount} units of {FuelType}.");
    }
}
