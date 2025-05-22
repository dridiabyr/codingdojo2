using System;


public class Coffee : Drink
{
    public string Roast;
    public string BeanType;

   public Coffee(string name, string color, double temp, int calories, string roast, string beanType)
        : base(name, color, temp, false, calories)
    {
        Roast = roast;
        BeanType = beanType;
    }

    public override void ShowDrink()
    {
        Console.WriteLine($"Soda: {Name}, Color: {Color}, Temp: {Temperature}°C, Calories: {Calories}, Carbonated: {IsCarbonated}");
    }

}