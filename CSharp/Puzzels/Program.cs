
using System;
class Program
{
    static string CoinFlip()
    {
        Random rand = new Random();
        int result = rand.Next(2);

        return result == 0 ? "heads" : "tails";
    }

    static int DiceRoll()
    {
        Random random = new Random();
        return random.Next(1, 7);
    }

    static List<int> RollMultiple(int sides, int rolls)
    {
        Random random = new Random();
        List<int> result = new List<int>();

        for (int i = 0; i < rolls; i++)
        {
            int roll = random.Next(1, sides + 1);
            result.Add(roll);
        }
        return result;
    }

    static string RollUntil(int target)
    {
      

        Random random = new Random();
        int count = 0;
        int roll = 0;

        do
        {
            roll = random.Next(1, 7);
            count++;

        } while (roll != target);

        return $"rolled a {target} after {count} tries";

    }

    static void Main(string[] args)
    {
        //coin flip 
        string coin = CoinFlip();
        Console.WriteLine("Coin landed on :" + coin);

        // Dice roll 
        int dice = DiceRoll();
        Console.WriteLine("You rolled : " + dice);

        //start roll 
        List<int> result = RollMultiple(6, 4);
        Console.WriteLine("rolls : " + string.Join(", ", result));
        Console.WriteLine("Highest roll: " + result.Max());

        //Roll until 
        Console.WriteLine(RollUntil(6));
    }
}

