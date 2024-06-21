
using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Inserisci il nome: ");
        string nome = Console.ReadLine();

        Console.Write("Inserisci il cognome: ");
        string cognome = Console.ReadLine();

        Console.Write("Inserisci la data di nascita (gg/mm/aaaa): ");
        DateTime dataNascita = DateTime.Parse(Console.ReadLine());

        Console.Write("Inserisci il codice fiscale: ");
        string codiceFiscale = Console.ReadLine();

        Console.Write("Inserisci il sesso (M/F): ");
        string sesso = Console.ReadLine();

        Console.Write("Inserisci il comune di residenza: ");
        string comuneResidenza = Console.ReadLine();

        Console.Write("Inserisci il reddito annuale: ");
        double redditoAnnuale = double.Parse(Console.ReadLine());

        Contribuente contribuente = new Contribuente(nome, cognome, dataNascita, codiceFiscale, sesso, comuneResidenza, redditoAnnuale);

        Console.WriteLine("==================================================");
        Console.WriteLine("CALCOLO DELL'IMPOSTA DA VERSARE:");
        Console.WriteLine(contribuente.ToString());
    }
}
