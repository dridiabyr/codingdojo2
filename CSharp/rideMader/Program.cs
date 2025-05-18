using System;
using System.Collections.Generic;
class Program
{

    static void Main(string[] args)
    {
        Vehicle car = new Vehicle("Toyota Corolla", 5, "Blue", true);
        Vehicle bike = new Vehicle("Mountain Bike", 1, "Red", false);
        Vehicle skateboard = new Vehicle("CoolBoard", "Black");
        Vehicle horse = new Vehicle("Thunder the Horse", 1, "Brown", false);


        List<Vehicle> garage = new List<Vehicle> { car, bike, skateboard, horse };

        foreach (Vehicle v in garage)
        {
            v.ShowInfo();
        }
        Console.WriteLine("Making the car travel 100 miles...\n");
        car.Travel(100);
        car.ShowInfo();

    }

}