using System;

namespace Operators;

class Program
{
    static void Main(string[] args)
    {
        // Splitting string text.
        // Note: To suppress CS8600 warnings, we can use the NoWarn property <NoWarn>CS8600</NoWarn> in the .csproj file.
        Console.Write("Enter a two part phrase: ");
        string input = Console.ReadLine();
        if (string.IsNullOrEmpty(input))
        {
            Console.WriteLine("Input cannot be empty.");
            return;
        }
        else
        {
            string[] splitingInput = input.Split(" ");
            string firstString = splitingInput[0];
            string secondString = splitingInput[1];
            string result = firstString + secondString;
            Console.WriteLine(result);
            Console.WriteLine(firstString + " " + secondString);
            Console.WriteLine($"{firstString} {secondString}");
        }

        // Comparing values
        int a = 10;
        int b = 20;
        bool result1 = a.Equals(b);
        if (result1) { Console.WriteLine("a is equal to b"); } else { Console.WriteLine("a is not equal to b"); }
        // We could also use the == operator: bool result1 = a == b;
        
        result1 = a.Equals(b/2);
        if (result1) { Console.WriteLine("a is equal to b"); } else { Console.WriteLine("a is not equal to b"); }   
    }
}
