using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Refactor_Special_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int numberSum = 0; int unusualNumber = 0; 
            for (int number = 1; number <= num; number++)
            {
                unusualNumber = number;
                while (number > 0)
                {
                    numberSum += number % 10;
                    number = number / 10;
                }
                bool condition = (numberSum == 5) || (numberSum == 7) || (numberSum == 11);
                Console.WriteLine($"{unusualNumber} -> {condition}");
                numberSum = 0;
                number = unusualNumber;
            }


        }
    }
}


