namespace ConsoleApp3
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //esercizio 1
            ContoCorrente conto1 = new ContoCorrente("Pippo");
            ContoCorrente conto2 = new ContoCorrente("Paperone");
            ContoCorrente conto3 = new ContoCorrente("Pluto");


            Console.WriteLine(conto1.ApriConto(3000));
            Console.WriteLine(conto2.ApriConto(2000));
            Console.WriteLine(conto3.ApriConto(500));
            conto3.Preleva(500);
            Console.WriteLine(conto3.ToString());

            conto1.Preleva(500);
            Console.WriteLine(conto1.ToString());

            conto1.Versa(200);
            Console.WriteLine(conto1.ToString());



            conto2.Preleva(300);
            Console.WriteLine(conto2.ToString());

            conto2.Versa(200);
            Console.WriteLine(conto2.ToString());






            //esercizio 2 

            string[] arrayNomi = { "Lucia", "Armando", "Luca", "Francesco", "Mauro" };

            string nomeDaCercare = "Lucia";

            if (arrayNomi.Contains(nomeDaCercare))
            {
                Console.WriteLine("il nome richiesto è presente nell'array");
            }
            else
            {
                Console.WriteLine("il nome richiesto non è presente nell'array");
            }


            //esercizio 3

            int[] arrayNumeri = { 100, 150, 135, 27, 56, 85 };

            int somma = 0;



            for (int i = 0; i < arrayNumeri.Length; i++)
            {

                somma += arrayNumeri[i];
                
            }

            double mediaAritmetica = (double)somma / (arrayNumeri.Length);

            Console.WriteLine("La somma dei numeri nell'array è " + somma);
            Console.WriteLine("La media aritmetica dei numeri nell'array è " + mediaAritmetica);
            

        }



    }
}
