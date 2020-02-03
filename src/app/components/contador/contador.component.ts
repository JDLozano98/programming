import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  public resultado = 0 ;

  incrementar(){//Metodo para incrementar en el contador
    this.resultado = this.resultado + 1;
    return this.resultado;
  }

  decrementar(){//Metodo para decrementar en el contador
    this.resultado = this.resultado - 1;
    return this.resultado;
  }
}
