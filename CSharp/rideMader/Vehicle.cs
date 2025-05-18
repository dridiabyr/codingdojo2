using System;

public class Vehicle
{
    public string Name;
    public int PassNum;
    public string Color;
    public bool Engine;
    private int miles = 0;

    // Full constructor
    public Vehicle(string name, int passNum, string color, bool engine)
    {
        Name = name;
        PassNum = passNum;
        Color = color;
        Engine = engine;
    }

    // Partial constructor
    public Vehicle(string name, string color)
    {
        Name = name;
        Color = color;
        PassNum = 4;
        Engine = true;
    }

    public void ShowInfo()
    {
        Console.WriteLine(".........Vehicle Information ");
        Console.WriteLine($"Name: {Name}");
        Console.WriteLine($"Passenger Number: {PassNum}");
        Console.WriteLine($"Color: {Color}");
        Console.WriteLine($"Has Engine: {Engine}");
        Console.WriteLine($"Traveled Miles: {miles}\n");
    }

    public void Travel(int distance)
    {
        if (distance > 0)
        {
            miles += distance;
            Console.WriteLine($"{Name} has traveled {distance} miles.");
        }
        else
        {
            Console.WriteLine("Distance must be greater than 0.");
        }
    }

 
    public void ForceSetMiles(int milesInput)
    {
        miles = milesInput;
    }
}
