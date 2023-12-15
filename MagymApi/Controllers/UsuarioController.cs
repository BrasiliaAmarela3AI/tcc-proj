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
    public class UsuarioController : ControllerBase
    {
        private static List<Usuario> usuarios = new List<Usuario>()
        {
    
        };

        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(usuarios);
        }

        [HttpGet("Get")]
        public IActionResult GetFirst()
        {
            return Ok(usuarios[0]);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle (int id)
        {
            return Ok (usuarios.FirstOrDefault(us => us.Id == id));
        }

        [HttpPost]
        public IActionResult AddUsuario (Usuario novoUsuario)
        {
            usuarios.Add(novoUsuario);
            return Ok(usuarios);
        }

        [HttpPut]
        public IActionResult UpdateUsuario(Usuario u)
        {
            Usuario usuarioAlterado = usuarios.Find(usu => usu.Id == u.Id);
            usuarioAlterado.Nome = u.Nome;
            usuarioAlterado.Perfil = u.Perfil;
            return Ok(usuarios);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            usuarios.RemoveAll(usu => usu.Id == id);
            return Ok(usuarios);
        }

        [HttpGet ("GetContagem")]
        public IActionResult GetQuantidade()
        {
            return Ok("Quantidade de usuarios:" + usuarios.Count);
        }

        [HttpGet ("GetByNomeAproximado/{nome}")]
        public IActionResult GetByNomeAproximado(string nome)
        {
            List<Usuario> listaBusca =  usuarios.FindAll(u => u.Nome.Contains(nome));
            return Ok(listaBusca);
        }

        
    

    }
    
}