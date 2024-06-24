using System.Collections;
using System.Text;

namespace ConsoleAppMenu
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;
            var menuList = new List<Menu>
            {
                new Menu("Coca Cola 150 ml", 2.50),
                new Menu("Insalata di pollo", 5.20),
                new Menu("Pizza Margherita", 10.00),
                new Menu("Pizza 4 Formaggi", 12.50),
                new Menu("Pz patatine fritte", 3.50),
                new Menu("Insalata di riso", 8.00),
                new Menu("Frutta di stagione", 5.00),
                new Menu("Pizza Fritta", 5.00),
                new Menu("Piadina vegetariana", 6.00),
                new Menu("Panino hamburger", 7.90),
            };

            ArrayList ordine = new ArrayList();
            int scelta;

            Console.WriteLine("==============BENVENUTO NEL NOSTRO PUB==============");
            Console.WriteLine("==============QUESTO E' IL NOSTRO MENU==============");
            Console.WriteLine("=============Scegli cosa aggiungere al tuo ordine e alla fine stampa il conto e la conferma==============");
            do
            {
                for (int i = 0; i < menuList.Count; i++)
                {
                    Console.WriteLine($"{i + 1}: {menuList[i].ListaMenu()}");
                }
                Console.WriteLine("11: Stampa conto finale e conferma");
                Console.WriteLine("================================");

                string input = Console.ReadLine();

                if (int.TryParse(input, out scelta))
                {
                    if (scelta >= 1 && scelta <= 10)
                    {
                        ordine.Add(menuList[scelta - 1]);
                        Console.WriteLine($"{menuList[scelta - 1].Nome} aggiunto all'ordine.");
                        Console.WriteLine();
                        Console.WriteLine("================================");
                        Console.WriteLine();
                    }
                    else if (scelta != 11)
                    {
                        Console.WriteLine("Input non valido. Inserisci un numero tra 1 e 11.");
                        Console.WriteLine();
                    }
                }
                else
                {
                    Console.WriteLine("Input non valido. Inserisci un numero tra 1 e 11.");
                    Console.WriteLine();
                }

            }
            while (scelta != 11);

            Console.WriteLine("==============CONTO FINALE==============");
            Console.WriteLine("********IL TUO ORDINE*********");
            double totale = 0;
            foreach (Menu item in ordine)
            {
                Console.WriteLine(item.ListaMenu());
                totale += item.Prezzo;
            }
            const double costoServizio = 3.00;
            totale += costoServizio;
            Console.WriteLine($"Servizio al tavolo: € {costoServizio:F2}");
            Console.WriteLine($"Totale: € {totale:F2}");
            Console.WriteLine("=======================================");
            Console.WriteLine("GRAZIE. ABBIAMO RICEVUTO L'ORDINE IN CUCINA.");
            Console.WriteLine("PER EFFETTUARE UN ALTRO ORDINE, RIAVVIARE L'APPLICAZIONE.");
        }
    }

}
