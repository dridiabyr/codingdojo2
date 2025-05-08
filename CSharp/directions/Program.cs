using System;
using System.Collections.Generic;

class Program
{
    static void PrintList(List<string> MyList)
    {
        foreach (string name in MyList)
        {
            Console.WriteLine(name);
        }
    }

    static void SumOfNumbers(List<int> IntList)
    {
        int sum = 0;
        foreach (int num in IntList)
        {
            sum += num;
        }
        Console.WriteLine(sum);
    }

    static int FindMax(List<int> IntList)
    {
        int max = IntList[0];
        foreach (int num in IntList)
        {
            if (num > max)
            {
                max = num;
            }
        }
        return max;
    }

    static List<int> SquareValues(List<int> IntList)
    {
        List<int> sq = new List<int>();
        foreach (int num in IntList)
        {
            sq.Add(num * num);
        }
        return sq;
    }

    static int[] NonNegatives(int[] IntArray)
    {
        for (int i = 0; i < IntArray.Length; i++)
        {
            if (IntArray[i] < 0)
            {
                IntArray[i] = 0;
            }
        }
        return IntArray;
    }


    static void PrintDictionary(Dictionary<string, string> MyDictionary)
    {
        foreach (KeyValuePair<string, string> entry in MyDictionary)
        {
            Console.WriteLine($"{entry.Key}: {entry.Value}");
        }

    }

    static bool FindKey(Dictionary<string, string> MyDictionary, string SearchTerm)
    {
        return MyDictionary.ContainsKey(SearchTerm);
    }




    static Dictionary<string, int> GenerateDictionary(List<string> Names, List<int> Numbers)
    {
        Dictionary<string, int> result = new Dictionary<string, int>();
        for (int i = 0; i < Names.Count; i++)
        {
            result[Names[i]] = Numbers[i];
        }
        return result;
    }

    static void PrintDictionary(Dictionary<string, int> dict)
    {
        foreach (var entry in dict)
        {
            Console.WriteLine($"{entry.Key}: {entry.Value}");
        }
    }



    static void Main(string[] args)
    {
        List<string> TestStringList = new List<string>() { "Harry", "Steve", "Carla", "Jeanne" };
        PrintList(TestStringList);

        List<int> TestIntList = new List<int>() { 2, 7, 12, 9, 3 };
        SumOfNumbers(TestIntList);

        List<int> TestIntList2 = new List<int>() { -9, 12, 10, 3, 17, 5 };
        int result = FindMax(TestIntList2);
        Console.WriteLine("Max value: " + result);

        List<int> TestIntList3 = new List<int>() { 1, 2, 3, 4, 5 };
        List<int> result0 = SquareValues(TestIntList3);
        Console.WriteLine("Squared values: [" + string.Join(",", result0) + "]");

        int[] TestIntArray = new int[] { -1, 2, 3, -4, 5 };
        int[] result1 = NonNegatives(TestIntArray);
        Console.WriteLine("Modified array: [" + string.Join(",", result1) + "]");

        Dictionary<string, string> TestDict = new Dictionary<string, string>();
        TestDict.Add("HeroName", "Iron Man");
        TestDict.Add("RealName", "Tony Stark");
        TestDict.Add("Powers", "Money and intelligence");
        PrintDictionary(TestDict);
        Console.WriteLine(FindKey(TestDict, "RealName"));

        Console.WriteLine(FindKey(TestDict, "Name"));

        List<string> names = new List<string>() { "Julie", "Harold", "James", "Monica" };
        List<int> numbers = new List<int>() { 6, 12, 7, 10 };
        
        var generatedDict = GenerateDictionary(names, numbers);
        PrintDictionary(generatedDict);


    }
}
