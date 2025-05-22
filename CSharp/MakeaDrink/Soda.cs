using System;


public class Soda : Drink
{
    public bool IsDiet;

    public Soda(string name, string color, double temp, int calories, bool isDiet)
        : base(name, color, temp, true, calories) 
    {
        IsDiet = isDiet;
    }
    public override void ShowDrink()
    {
        Console.WriteLine($"Soda: {Name}, Color: {Color}, Temp: {Temperature}°C, Diet: {IsDiet}, Calories: {Calories}, Carbonated: {IsCarbonated}");
    }

}