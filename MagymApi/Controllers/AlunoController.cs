using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MagymApi.Models;
using MagymApi.Models.Enuns;
using Microsoft.AspNetCore.Http.HttpResults;


namespace MagymApi.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class AlunoController : ControllerBase
    {
    private static List<Aluno> alunos = new List<Aluno>(){};

        /*private static List<Armario> armarios = new List<Armario>(){};

        public AlunoController()
    {
        alunos = new List<Aluno>
        {
            new Aluno { Id = 1, Nome = "João" },
            new Aluno { Id = 2, Nome = "Maria" }
            
        };

        armarios = new List<Armario>
        {
            new Armario { Numero_armario = 1, StatusArmario = 0 },
            new Armario { Numero_armario = 2, StatusArmario = 1 }
            
        };
    }*/

    }
}