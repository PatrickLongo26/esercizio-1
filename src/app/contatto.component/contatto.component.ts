import{Component} from '@angular/core';
import{Contatto} from './contatto.model';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: [ './contatto.component.css' ]
})

export class ContattoComponent {
  contatto: Contatto = new Contatto("Patrick", "Longo","patrick.longo@marconirovereto.it", "12345678", 5);

}