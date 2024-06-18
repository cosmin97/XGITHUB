namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Persona persona1 = new Persona("Mario", "Rossi", 45);
            Persona persona2 = new Persona("Giuseppe", "Verdi", 30);

            Console.WriteLine("dettagli persona1 = " + persona1.getDettagli());
            Console.WriteLine("dettagli persona2 = " + persona2.getDettagli());
        }
    }
}
