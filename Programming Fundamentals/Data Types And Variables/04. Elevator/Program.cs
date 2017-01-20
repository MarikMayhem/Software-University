using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Elevator
{
    class Program
    {
        static void Main(string[] args)
        {
            int personNumber = int.Parse(Console.ReadLine());
            int capacity = int.Parse(Console.ReadLine());

            int output = (int)Math.Ceiling((double) personNumber / capacity);

            Console.WriteLine(output);
        }
    }
}
