


using System;
class Program
{
    static void Main(string[] args)
    {
        //first Question :
        for (int i = 1; i <= 255; i++)
        {
            Console.WriteLine(i);
        }
        //2nd Question
        Random rand = new Random();
        Console.WriteLine("the 5 random numbers are : ");
        for (int i = 1; i <= 5; i++)
        {
            int number = rand.Next(10, 20);
            Console.WriteLine(number);
        }
        //3rd Question : 
        Random rand1 = new Random();

        int sum = 0;
        for (int i = 1; i <= 5; i++)
        {
            int numb = rand1.Next(10, 20);
            sum += numb;

        }
        Console.WriteLine("The sum of the 5 random numbers is: " + sum);
        //question 4
        for (int i = 1; i <= 100; i++)
        {
            if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0))
            {
                Console.WriteLine("this numbers are Divisible by 3 OR 5 but NOT both  :" + i);
            }
        }
        //question 5
        for (int i = 1; i <= 100; i++)
        {

            if (i % 3 == 0 && i % 5 != 0)
            {
                Console.WriteLine("Fizz " + i);
            }
            else if (i % 5 == 0 && i % 3 != 0)
            {
                Console.WriteLine("Bizz " + i);
            }
        }
        //question 6
        int j = 1;

        while (j <= 100)
        {
            if (j % 3 == 0 && j % 5 == 0)
            {
                Console.WriteLine("FizzBuzz " + j);
            }
            else if (j % 3 == 0)
            {
                Console.WriteLine("Fizz " + j);
            }
            else if (j % 5 == 0)
            {
                Console.WriteLine("Buzz " + j);
            }

            j++;
        }
       
    }

}

