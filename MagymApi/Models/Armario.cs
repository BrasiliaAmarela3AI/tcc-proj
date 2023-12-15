using MagymApi.Models;
using MagymApi.Models.Enuns;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MagymApi.Models
{
    public class Armario
    {
        private int id_armario {get; set;}
        private StatusArmarioEnum StatusArmario {get; set;}
        private int Numero_armario {get; set;}
        private LocalizaçaoEnum Localizacao_armario {get; set;}

    }
}