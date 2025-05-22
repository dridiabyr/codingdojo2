using System;


public class using System.Diagnostics;Wine: Drink {

    public string Region;
public int Year;

public Wine (string name, string color, double temp, int calories, string region, int year):base(name, color, temp, false, calories)
{
    Region = region;
    Year = year;
}

public override void ShowDrink()
{
    Console.WriteLine($"Wine: {Name}, Region: {Region}, Year: {Year}, Temp: {Temperature}°C, Color: {Color}, Calories: {Calories}, Carbonated: {IsCarbonated}");
}

}