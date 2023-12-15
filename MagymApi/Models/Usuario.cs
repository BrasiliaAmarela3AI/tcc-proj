using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MagymApi.Models.Enuns;
using MagymApi.Models;


namespace MagymApi.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome {get; set;}
        public Perfil Perfil {get; set;}
        public List <IntegranteAPM> IntegranteAPMs {get; set; }
        public List<Aluno> Alunos {get; set;}
    }
}