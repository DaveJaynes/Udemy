using System;

namespace Lists;

internal class Program
{
    static void Main(string[] args)
    {
        List<string> myGroceryList = new List<string>();
        myGroceryList.Add("Apples");
        myGroceryList.Add("Bananas");
        myGroceryList.Add("Carrots");

        foreach (string item in myGroceryList)
        {
            Console.WriteLine(item);
        }
        
        // We can simplify the list initialization using a collection initializer.
        List<int> myNumbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        // IEnumerable exposes the enumerator, which supports a simple iteration over a collection of a specified type.
        // Here the result would be 2,4,6,8,10
        IEnumerable<int> myEvenNumbers = myNumbers.Where(n => n % 2 == 0);
        foreach (int number in myEvenNumbers)
        {
            Console.Write(number + ", ");
        }
        
        // Finally, we can convert the IEnumerable back to a List.
        List<int> evenNumbersList = myEvenNumbers.ToList();

        // Multi-dimensional arrays can be used to store data in a grid-like structure.
        int[,] grid = new int[3, 3]
        {
            { 1, 2, 3 },
            { 4, 5, 6 },
            { 7, 8, 9 }
        };

        // Displaying the grid
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                Console.Write(grid[i, j] + " ");
            }
            Console.WriteLine();
        }
        /*
        */
    }
}
