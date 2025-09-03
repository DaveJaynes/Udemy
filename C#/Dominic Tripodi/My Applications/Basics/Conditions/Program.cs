using System;

namespace Conditions;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("\n\nSpeed comparisons between adding elements independently, using for loop and using foreach loop");
        Console.WriteLine("==============================================================================================\n");

        int[] integers_to_add = new int[] { 10, 15, 20, 25, 30, 12, 34 };

        // Run one
        Console.WriteLine("Run 1: Just adding all the array elements together");
        Console.WriteLine("--------------------------------------------------");
        DateTime startTime1 = DateTime.Now;
        int totalValue = integers_to_add[0] + integers_to_add[1] + integers_to_add[2] + integers_to_add[3] + integers_to_add[4] + integers_to_add[5] + integers_to_add[6];
        DateTime endTime1 = DateTime.Now;
        double totalTime1 = (endTime1 - startTime1).TotalMilliseconds;
        Console.WriteLine("Total time for run 1 is " + totalTime1 + " MilliSeconds.\n");

        // Run two
        Console.WriteLine("Run 2: Adding array elements together in for loop");
        Console.WriteLine("-------------------------------------------------");
        DateTime startTime2 = DateTime.Now;
        totalValue = 0;
        for (int i = 0; i < integers_to_add.Length; i++)
        {
            totalValue += integers_to_add[i];
        }
        DateTime endTime2 = DateTime.Now;
        double totalTime2 = (endTime2 - startTime2).TotalMilliseconds;
        Console.WriteLine("Total time for run 2 is " + totalTime2 + " MilliSeconds.\n");

        // Run three
        Console.WriteLine("Run 3: Adding array elements together in for-each loop");
        Console.WriteLine("------------------------------------------------------");
        DateTime startTime3 = DateTime.Now;
        totalValue = 0;
        foreach (int each_int in integers_to_add)
            totalValue += each_int;
        DateTime endTime3 = DateTime.Now;
        double totalTime3 = (endTime3 - startTime3).TotalMilliseconds;
        Console.WriteLine("Total time for run 3 is " + totalTime3 + " MilliSeconds.\n\n");

        WhileLoop loops = new WhileLoop();
        loops.Heading();
        loops.whileloop();
        loops.dowhileloop();

        // Testing Pass by reference
        Console.WriteLine("\nArray integers_to_add before calling the MyMethod method");
        foreach(int ita in integers_to_add)
            Console.Write(ita + ", ");
        Console.WriteLine();

        MyMethod m = new MyMethod(integers_to_add);
        m.PassByReference();

        Console.WriteLine("\nArray integers_to_add after calling the MyMethod method");
        foreach (int ita in integers_to_add)
            Console.Write(ita + ", ");
        Console.WriteLine();
    }
}