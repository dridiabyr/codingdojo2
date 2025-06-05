using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        Car car = new Car("Toyota");
        Horse horse = new Horse("Shadowfax");
        Bicycle bicycle = new Bicycle("MountainBike");

        List<Vehicle> vehicles = new List<Vehicle> { car, horse, bicycle };
        List<INeedFuel> fuelNeedy = new List<INeedFuel>();

        foreach (var v in vehicles)
        {
            if (v is INeedFuel fuelUser)
            {
                fuelNeedy.Add(fuelUser);
            }
        }

        foreach (var f in fuelNeedy)
        {
            f.GiveFuel(10);
        }

        foreach (var f in fuelNeedy)
        {
            Console.WriteLine($"{((Vehicle)f).Name} has {f.FuelTotal} units of {f.FuelType}.");
        }
    }
}
