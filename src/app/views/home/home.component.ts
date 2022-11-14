import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    setTimeout(() =>{
      this.objStyle['color']="blue";
    }, 3000);
   }

  public user: string = "Rodrigo Araujo Santos";

  public image: any = {
    src: "https://static.vecteezy.com/ti/vetor-gratis/p1/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg", 
    alt: "avatar"
  };

  public reacao(): void {
    alert("Aprendendo Event Binding");
  }

  public objStyle: any = {
    'font-size': '70px',
    'color': ' red'
  }

  public isError: boolean = false;
  public classCor: any = "green"

  public sapinho: boolean = true;
  public mudarSapinho(): void {
    this.sapinho = !this.sapinho;
  }

  public peixes: string[] = [
    "tubarão",
    "polvo",
    "peixe palhaço",
    "baiacu",
    "cavalo-marinho",
    "lula",
    "carpa"
  ];

  public textoPipe: string = "Texto de Exemplo (Pipes)";

  public numberPipe: number = 36.3334;

  public nowPipe = new Date();

  public objPipe = {
    nome: "Rodrigo",
    idade: 39,
    area: "Tecnologia"
  }
}
