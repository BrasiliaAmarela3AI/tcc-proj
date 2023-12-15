import { CompraUniformesComponent } from './components/compra-uniformes/compra-uniformes.component';
import { AlugaArmarioBatCavernaComponent } from './components/aluga-armario-bat-caverna/aluga-armario-bat-caverna.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginAlunoComponent } from './components/login-aluno/login-aluno.component';
import { LoginIntegranteAPMComponent } from './components/login-integrante-apm/login-integrante-apm.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroIntegranteApmComponent } from './components/cadastro-integrante-apm/cadastro-integrante-apm.component';
import { ResetarSenhaComponent } from './components/resetar-senha/resetar-senha.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { LocalArmarioComponent } from './components/local-armario/local-armario.component';
import { AlugaArmarioOficinaMecanicaComponent } from './components/aluga-armario-oficina-mecanica/aluga-armario-oficina-mecanica.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import { CalcaFemininaComponent } from './components/calca-feminina/calca-feminina.component';
import { CamisetaPretaComponent } from './components/camiseta-preta/camiseta-preta.component';
import { AlugaArmarioComponent } from './components/aluga-armario/aluga-armario.component';
import { CalcasComponent } from './components/calcas/calcas.component';
import { CamisetaFemPretaComponent } from './components/camiseta-fem-preta/camiseta-fem-preta.component';

const routes: Routes = [
  { path: 'compra-uniformes', component: CompraUniformesComponent },
  { path: 'local-armario', component: LocalArmarioComponent },
  { path: 'aluga-armario', component: AlugaArmarioComponent },
  { path: 'calca', component: CalcasComponent },
  { path: 'camisa-preta-fem', component: CamisetaFemPretaComponent },
  {
    path: 'aluga-armario-bat-caverna',
    component: AlugaArmarioBatCavernaComponent,
  },
  {
    path: 'aluga-armario-oficina-mecanica',
    component: AlugaArmarioOficinaMecanicaComponent,
  },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'login-aluno', component: LoginAlunoComponent },
  { path: 'login-integrante-apm', component: LoginIntegranteAPMComponent },
  { path: 'cadastro-aluno', component: CadastroAlunoComponent },
  {
    path: 'cadastro-integrante-apm',
    component: CadastroIntegranteApmComponent,
  },
  { path: 'resetar-senha', component: ResetarSenhaComponent },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'calca-feminina', component: CalcaFemininaComponent },
  { path: 'camiseta-preta', component: CamisetaPretaComponent },
  { path: '', component: TelaInicialComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
const appRoutes: Routes = [
  // Outras rotas, se houver
];
