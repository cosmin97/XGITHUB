using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    internal class ContoCorrente
    {
        string nomeTitolare { get; set; }
        int saldo { get; set; }

        bool contoAperto { get; set; }

        public ContoCorrente(string nomeTitolare)
        {
            this.nomeTitolare = nomeTitolare;
            this.saldo = 0;
            this.contoAperto = false;
        }


        public string ApriConto(int depositoIniziale)
        {

            if (depositoIniziale >= 1000)
            {
                this.nomeTitolare = nomeTitolare;
                this.saldo = depositoIniziale;
                this.contoAperto = true;
                return "Il conto è stato aperto a nome di " + nomeTitolare + " con un saldo di " + saldo + " euro.";
            }
            else
            {
                return "Devi depositare almeno 1000 euro per aprire il conto.";
            }
        }


        public void Versa(int a)
        {
            if (contoAperto)
            {
                saldo += a;
            }
            else
            {
                
            }
        }

        public void Preleva(int a)
        {
            if (contoAperto)
            {
                if (saldo >= a)
                {
                    saldo -= a;
                }
                else
                {
                    Console.WriteLine("Non è possibile prelevare più di quanto ci sia sul conto");
                }
            }
            else
            {
                Console.WriteLine("Non esiste un conto aperto a questo nome");
            }
        }


        public override string ToString()
        {
            if (contoAperto)
            {
              return "Il saldo corrente del conto a nome di " + nomeTitolare + " è " + saldo + " euro.";
            }
            return "non esiste un conto aperto a questo nome";


        }

    }
}
