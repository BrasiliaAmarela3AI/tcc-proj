using MagymApi.Models;
using MagymApi.Models.Enuns;


namespace MagymApi.Models
{
    public class Aluno
    {
        public Usuario Usuario{get; set;}
        private int Rm {get; set;}
        private string Email_aluno {get; set;}
        public TurmaEnum Turma_aluno {get; set;}
        private string CPF_aluno {get; set;} 
    }
}