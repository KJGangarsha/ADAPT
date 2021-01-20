
class ArmstrongOrNot
{
    public static boolean armstrongCheck(int num)
    {
        int n=num, x=0, sum=0;
        while(num>0)
        {
            x=num%10;
            num=num/10;
            sum+=x*x*x;
        }
        return (sum==n);
    }
}