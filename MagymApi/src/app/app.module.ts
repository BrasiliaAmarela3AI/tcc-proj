import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginAlunoModule } from './components/login-aluno/login-aluno.module';
import { LoginIntegranteAPMComponent } from './components/login-integrante-apm/login-integrante-apm.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroIntegranteApmComponent } from './components/cadastro-integrante-apm/cadastro-integrante-apm.component';
import { ResetarSenhaComponent } from './components/resetar-senha/resetar-senha.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { LocalArmarioComponent } from './components/local-armario/local-armario.component';
import { AlugaArmarioOficinaMecanicaComponent } from './components/aluga-armario-oficina-mecanica/aluga-armario-oficina-mecanica.component';
import { AlugaArmarioBatCavernaComponent } from './components/aluga-armario-bat-caverna/aluga-armario-bat-caverna.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import { CalcaFemininaComponent } from './components/calca-feminina/calca-feminina.component';
import { CamisetaPretaComponent } from './components/camiseta-preta/camiseta-preta.component';
import { CompraUniformesComponent } from './components/compra-uniformes/compra-uniformes.component';
import { AlugaArmarioComponent } from './components/aluga-armario/aluga-armario.component';
import { CalcasComponent } from './components/calcas/calcas.component';
import { CamisetaFemPretaComponent } from './components/camiseta-fem-preta/camiseta-fem-preta.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginIntegranteAPMComponent,
    CadastroAlunoComponent,
    CadastroIntegranteApmComponent,
    ResetarSenhaComponent,
    TelaInicialComponent,
    LocalArmarioComponent,
    AlugaArmarioOficinaMecanicaComponent,
    AlugaArmarioBatCavernaComponent,
    CamisetasComponent,
    CalcaFemininaComponent,
    CamisetaPretaComponent,
    CompraUniformesComponent,
    AlugaArmarioComponent,
    CalcasComponent,
    CamisetaFemPretaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, LoginAlunoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
