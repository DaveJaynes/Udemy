using System;

public class Program
{
    static void Main(string[] args)
    {
        // First way to declare and initialize an array
        string[] myArray = new string[2];
        myArray[0] = "Hello, World!";
        myArray[1] = "Welcome to C# programming.";
        foreach (string item in myArray)
        {
            Console.WriteLine(item);
        }

        // Second way to declare and initialize an array
        string[] greetings = { "Hello, World!", "Welcome to C# programming.", "Enjoy coding!" };
        foreach (string greeting in greetings)
        {
            Console.WriteLine(greeting);
        }
    }
}
