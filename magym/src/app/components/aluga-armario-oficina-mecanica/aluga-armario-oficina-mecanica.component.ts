import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluga-armario-oficina-mecanica',
  templateUrl: './aluga-armario-oficina-mecanica.component.html',
  styleUrls: ['./aluga-armario-oficina-mecanica.component.css'],
})
export class AlugaArmarioOficinaMecanicaComponent {
  armarios = [
    { id: 1, label: '330' },
    { id: 2, label: '336' },
    { id: 3, label: '340' },
    { id: 4, label: '314' },
    { id: 5, label: '320' },
    { id: 6, label: '291' },
  ];

  constructor(private router: Router) {}

  onArmarioClick(event: any, id: number) {
    const isOcupado = event.target.classList.contains('ocupado');

    if (!isOcupado) {
      this.router.navigate(['/aluga-armario', id]);
    } else {
    }
  }
}
