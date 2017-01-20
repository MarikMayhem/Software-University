using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Refactor_Volume_of_Pyramid
{
    class Program
    {
        static void Main(string[] args)
        {
           
            
            double lenght = double.Parse(Console.ReadLine());
            double width = double.Parse(Console.ReadLine());
            double Height = double.Parse(Console.ReadLine());
            Console.Write("Length: ");
            Console.Write("Width: ");
            Console.Write("Height: ");

            var Volume = (lenght * width * Height) / 3;

            Console.WriteLine("Pyramid Volume: {0:f2}", Volume);
            
            

        }
    }
}
