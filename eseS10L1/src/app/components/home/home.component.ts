import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/post';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  postArr: iPost[] = [];

  constructor(private postSvc: PostsService) { }

  ngOnInit(){
    this.postArr = this.postSvc.posts;
  }

}



  /*appunti per me:
  Il codice 0.5 - Math.random() restituisce un numero casuale compreso tra -0.5 e 0.5. Ecco come funziona:

Math.random(): Restituisce un numero pseudo-casuale compreso tra 0 (incluso) e 1 (escluso).
0.5 - Math.random(): Sottrae questo numero da 0.5, ottenendo un numero casuale compreso tra -0.5 e 0.5.
Il motivo per cui 0.5 - Math.random() funziona per mescolare un array è che:

Quando il risultato è negativo, indica che l'elemento a deve essere ordinato prima di b.
Quando il risultato è positivo, indica che l'elemento a deve essere ordinato dopo di b.
Quando il risultato è zero (un caso raro), gli elementi mantengono l'ordine relativo.
Questo causa un ordinamento casuale degli elementi perché ogni coppia di elementi nell'array sarà ordinata in modo casuale.

Perché 0.5 - Math.random()?
Il valore 0.5 è scelto come punto medio perché la distribuzione uniforme di Math.random() attorno a 0.5 dà una probabilità equa di
 ottenere un valore positivo o negativo, quindi mescola l'array in modo efficace. */

