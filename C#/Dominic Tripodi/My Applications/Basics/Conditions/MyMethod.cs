namespace Conditions;

public class MyMethod
{
    private int[] integers_to_add;

    public MyMethod(int[] integers_to_add)
    {
        int y = 0;
        foreach(int x in integers_to_add)
        {
            this.integers_to_add[y] = x;
            y++;
        }
    }

    public void PassByReference()
    {
        this.integers_to_add[2] = 199;
    }
}