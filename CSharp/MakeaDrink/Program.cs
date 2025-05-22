using System;
class Program
{

    static void Main(string[] args)
    {
        Soda pepsi = new Soda("Pepsi", "Dark Brown", 5.0, 150, false);
        Coffee espresso = new Coffee("Espresso", "Black", 70.0, 5, "Dark", "Arabica");
        Wine chardonnay = new Wine("Chardonnay", "Golden", 12.0, 120, "Napa Valley", 2020);


        List<Drink> All = new List<Drink> { pepsi, espresso, chardonnay };

foreach (Drink drink in All)
        {
            drink.ShowDrink();

        }
    }
}