using System;

public class Car : Vehicle, INeedFuel
{
    public string FuelType { get; set; }
    public int FuelTotal { get; set; }

    public Car(string name) : base(name, true)
    {
        FuelType = "Gasoline";
        FuelTotal = 10;
    }

    public void GiveFuel(int amount)
    {
        FuelTotal += amount;
        Console.WriteLine($"{Name} received {amount} units of {FuelType}.");
    }
}
