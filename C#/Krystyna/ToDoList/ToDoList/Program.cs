using System.Numerics;
/*
int number = 2;
number = number + 3;
Console.Write("Enter text: ");

String userInput = Console.ReadLine();
Console.WriteLine($"User entered {userInput} and the number is {number}.");

bool isTrue = 1 == 2;
Console.WriteLine($"Bool = {isTrue}.");
Console.ReadLine();
*/

int a = 0;
int[] numbers = new int[3];
/*
for (int i = 0; i < numbers.Length; i++)
{
    a++;
    numbers[i] = a;
    Console.WriteLine($"The value of position {i} in {numbers[i]}");
}
Console.ReadKey();
*/

foreach( int i in numbers )
{
    a++;
    numbers[i] = a;
    Console.WriteLine($"The value of position {i} in {numbers[i]}");
}

