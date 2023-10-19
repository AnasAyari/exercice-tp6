import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/classes/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-listlivres',
  templateUrl: './listlivres.component.html',
  styleUrls: ['./listlivres.component.css']
})
export class ListlivresComponent implements OnInit{
  public leslivres:Livre[]=[]
  constructor(private livreservice:LivreService){}
  ngOnInit(): void {
    this.leslivres=this.livreservice.getLivres()
  }
}
