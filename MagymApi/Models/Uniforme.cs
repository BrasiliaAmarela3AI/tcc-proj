using MagymApi.Models;
using MagymApi.Models.Enuns;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MagymApi.Models
{
    public class Uniforme
    {
        private int id_uniforme {get; set;}
        public TipoEnum Tipo {get; set;}
        private string Tamanho {get; set;}
        private double Preco {get; set;}

    }
}