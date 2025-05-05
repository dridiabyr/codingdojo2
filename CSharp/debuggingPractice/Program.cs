// Challenge 1

using System;
class Program
{
    static void Main(string[] args)
    {
        bool amProgrammer = true;
        int Age = 27;
        List<string> Names = new List<string>() { "Monica" };
        Console.WriteLine("Am I a programmer? " + amProgrammer);
        Console.WriteLine("My age: " + Age);
       

        Dictionary<string, string> MyDictionary = new Dictionary<string, string>();
        MyDictionary.Add("Hello", "0");
        MyDictionary.Add("Hi there", "0");
        // This is a tricky one! Hint: look up what a char is in C#
        char MyName = 'M';
         Console.WriteLine("First letter of my name: " + MyName);
        // Challenge 2
        List<int> Numbers = new List<int>() { 2, 3, 6, 7, 1, 5 };
        for (int i = Numbers.Count - 1; i >= 0; i--)
        {
            Console.WriteLine(Numbers[i]);
        }
        // Challenge 3
        List<int> MoreNumbers = new List<int>() { 12, 7, 10, -3, 9 };
        foreach (int i in MoreNumbers)
        {
            Console.WriteLine(i);
        }
        // Challenge 4
        List<int> EvenMoreNumbers = new List<int> { 3, 6, 9, 12, 14 };
        for (int i = 0; i < EvenMoreNumbers.Count; i++)
        {
            if (EvenMoreNumbers[i] % 3 == 0)
            {
                EvenMoreNumbers[i] = 0;
            }
        }
        // Challenge 5
        // What can we learn from this error message?
        string MyString = "superduberawesome";
        char[] stringArray = MyString.ToCharArray();
        stringArray[7] = 'p';
        MyString = new string(stringArray);
        Console.WriteLine(MyString);

        // we can't change a character  directky in a string so we have to convert  it to an array  and then we change the char we build a new string 


        // Challenge 6
        // Hint: some bugs don't come with error messages
        Random rand = new Random();
        int randomNum = rand.Next(12);
        if (randomNum == 11)
        {
            Console.WriteLine("Hello");
        }
    }
    //either we change the rang or the condition and i choose the condition cause random(12) is between 0 and 11 
}