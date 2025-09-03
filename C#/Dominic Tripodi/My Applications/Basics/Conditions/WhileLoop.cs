namespace Conditions;

public class WhileLoop
{
    DateTime startTime;
    DateTime endTime;
    double totalTime;
    int index;
    int totalValue;
    int[] integers_to_add = new int[] { 10, 15, 20, 25, 30, 12, 34 };

    public void Heading()
    {
    Console.WriteLine("\n\nSpeed comparisons between while and do while loops");
    Console.WriteLine("====================================================\n");
    }

    public void whileloop()
    {
        // Run one
        Console.WriteLine("Run 1: Performing while loop");
        Console.WriteLine("----------------------------");
        index = 0;
        totalValue = 0;
        startTime = DateTime.Now;
        while(index < integers_to_add.Length)
        {
            totalValue += integers_to_add[index];
            index++;
        }
        endTime = DateTime.Now;
        totalTime = (endTime - startTime).TotalMilliseconds;
        Console.WriteLine("Total time for run 1 is " + totalTime + " MilliSeconds.\n");
    }

    public void dowhileloop()
    {
        // Run one
        Console.WriteLine("Run 2: Performing do-while loop");
        Console.WriteLine("-------------------------------");
        index = 0;
        totalValue = 0;
        startTime = DateTime.Now;
        do
        {
            totalValue += integers_to_add[index];
            index++;
        }while(index < integers_to_add.Length);
        endTime = DateTime.Now;
        totalTime = (endTime - startTime).TotalMilliseconds;
        Console.WriteLine("Total time for run 2 is " + totalTime + " MilliSeconds.\n");

        return;
    }
}
