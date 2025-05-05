using System;

class Program
{
    static void Main(string[] args)
    {
        int[] numbers = new int[10];

        for (int i = 0; i < numbers.Length; i++)
        {
            numbers[i] = i;
        }

        foreach (int num in numbers)
        {
            Console.Write(num + " ");
        }

        string[] names = { "Tim", "Martin", "Nikki", "Sara" };

        foreach (string name in names)
        {
            Console.WriteLine(name);
        }
        bool[] boolarray = new bool[10];

        for (int i = 0; i < boolarray.Length; i++)
        {
            if (i % 2 == 0)
            {
                boolarray[i] = true;
            }
            else { boolarray[i] = false; }
        }
        foreach (bool value in boolarray)
        {
            Console.WriteLine(value);
        }


        // Lists 

        List<string> iceCream = new List<string>()
        {
            "Vanilla",
            "Chocolate",
            "Strawberry",
            "Pistachio",
            "Cookies"
        };
        Console.WriteLine("Total ice cream flavors: " + iceCream.Count);
        Console.WriteLine("The third flavor is: " + iceCream[2]);
        iceCream.RemoveAt(2);
        Console.WriteLine("Total ice cream flavors after removal: " + iceCream.Count);

        foreach (string flavor in iceCream)
        {
            Console.WriteLine(flavor);

        }
        // Dictionaries 
        Dictionary<string, string> flavorDict = new Dictionary<string, string>{
            { "Vanilla", "Classic and smooth" },
            { "Chocolate", "Rich and creamy" },
            { "Strawberry", "Sweet and fruity" },
            { "Pistachio", "Nutty and crunchy" },
            { "Cookies", "Sweet with chunks of cookie" }
        };
Random rand = new Random();
        Dictionary<string, string> userflav = new Dictionary<string, string>();


foreach(string name in names) {
    //select a random flavor
    string selectedflav = iceCream[rand.Next(iceCream.Count)];
    userflav.Add(name,selectedflav);
}
        foreach (KeyValuePair<string, string> entry in flavorDict)
        {
            Console.WriteLine($"{entry.Key} likes {entry.Value} ice cream ");
        }

    }
}