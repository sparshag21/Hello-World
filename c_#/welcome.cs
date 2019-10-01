using System;
 
namespace Welcome
{
	class Name
	{
		public static void Main(string[] args)
		{
			string name;
			Console.Write("Enter name");
			name = Console.ReadLine();
			Console.WriteLine("Welcome", name);
		}
	}
}