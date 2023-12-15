using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using MagymApi.Models.Enuns;
using MagymApi.Models;

namespace MagymApi.Models
{
    public class Perfil
    {
        public int Id_perfil { get; set;}
        public List <Usuario> usuario {get; set; }
        public string  Descrição_perfil {get; set;}
        
    }
}