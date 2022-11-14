import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  public user: string = "Rodrigo Araujo Santos";

  public image: any = {
    src: "https://static.vecteezy.com/ti/vetor-gratis/p1/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg", 
    alt: "avatar"
  };

  public clicar(): void {
    alert("Clicou!");
  }
}
