
using System;

class Contribuente
{
    public string Nome { get; set; }
    public string Cognome { get; set; }
    public DateTime DataNascita { get; set; }
    public string CodiceFiscale { get; set; }
    public string Sesso { get; set; }
    public string ComuneResidenza { get; set; }
    public double RedditoAnnuale { get; set; }

    public Contribuente(string nome, string cognome, DateTime dataNascita, string codiceFiscale, string sesso, string comuneResidenza, double redditoAnnuale)
    {
        Nome = nome;
        Cognome = cognome;
        DataNascita = dataNascita;
        CodiceFiscale = codiceFiscale;
        Sesso = sesso;
        ComuneResidenza = comuneResidenza;
        RedditoAnnuale = redditoAnnuale;
    }

    public double CalcolaImposta()
    {
        double imposta = 0;

        if (RedditoAnnuale <= 15000)
        {
            imposta = RedditoAnnuale * 0.23;
        }
        else if (RedditoAnnuale <= 28000)
        {
            imposta = 3450 + (RedditoAnnuale - 15000) * 0.27;
        }
        else if (RedditoAnnuale <= 55000)
        {
            imposta = 6960 + (RedditoAnnuale - 28000) * 0.38;
        }
        else if (RedditoAnnuale <= 75000)
        {
            imposta = 17220 + (RedditoAnnuale - 55000) * 0.41;
        }
        else
        {
            imposta = 25420 + (RedditoAnnuale - 75000) * 0.43;
        }

        return imposta;
    }

    public override string ToString()
    {
        return $"Contribuente: {Nome} {Cognome}, nato il {DataNascita.ToShortDateString()} ({Sesso}), residente in {ComuneResidenza}, codice fiscale: {CodiceFiscale}\n" +
               $"Reddito dichiarato: {RedditoAnnuale:C}\n" +
               $"IMPOSTA DA VERSARE: {CalcolaImposta():C}";
    }
}

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
