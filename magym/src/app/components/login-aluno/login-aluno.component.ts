import { Component } from '@angular/core';
import { RMs, RM } from '../../../api';

@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.component.html',
  styleUrls: ['./login-aluno.component.css'],
})
export class LoginAlunoComponent {
  loginInput: string = '';
  erroLogin: string = ''; // Nova propriedade para armazenar mensagens de erro

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSubmit(this.loginInput);
    }
  }

  validarLogin(numero: string): boolean {
    // Verifica se o número tem exatamente 6 dígitos
    if (numero.length !== 6 || isNaN(Number(numero))) {
      this.erroLogin = 'O número de login deve ter exatamente 6 dígitos.';
      return false;
    }

    // Converte o número para um número inteiro
    const numeroInteiro: number = parseInt(numero, 10);

    // Verifica se o número está em algum dos conjuntos permitidos
    if (!RMs.some((conjunto: RM) => conjunto.numeros.includes(numeroInteiro))) {
      this.erroLogin = 'Número de login inválido.';
      return false;
    }

    // Se chegou até aqui, o número é válido, então limpa a mensagem de erro
    this.erroLogin = '';
    return true;
  }

  onSubmit(numeroLogin: string): void {
    // Chama a função de validação
    if (this.validarLogin(numeroLogin)) {
      // Lógica de login bem-sucedido
      alert('Login bem-sucedido!'); // Substitua por sua lógica de login real
    }
  }
}
