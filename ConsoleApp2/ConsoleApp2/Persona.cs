using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class Persona
    {
        string nome;
        string cognome;
        int eta;

        public Persona(string nome, string cognome,int eta)
        {
            this.nome = nome;
            this.cognome = cognome;
            this.eta = eta;
        }

        public string getNome()
        {
            return nome;
        }
        public string getCognome()
        {
            return cognome;
        }


        public int getEta()
        {
            return eta;
        }

        public string getDettagli()
        {
            return getNome() + " , " + getCognome() + " , " + getEta() + " anni";
        }


    }
}
