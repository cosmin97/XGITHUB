using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppMenu
{
    internal class Menu
    {
        public string Nome {  get; set; }
        public double Prezzo {  get; set; }


        public Menu(string nome, double prezzo)
        {
            Nome = nome;
            Prezzo = prezzo;

        }

        public string ListaMenu()
        {
            return $"{Nome} (€ {Prezzo:F2})";
        }


    }
}
