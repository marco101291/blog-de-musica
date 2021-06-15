import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tarjeta-album',
  templateUrl: './tarjeta-album.component.html',
  styleUrls: ['./tarjeta-album.component.css']
})
export class TarjetaAlbumComponent implements OnInit {

  @Input () album: any = {};
  @Input () idx?: number;
  @Output () albumSeleccionado: EventEmitter<number>;


  constructor(private router: Router) {
    this.albumSeleccionado= new EventEmitter();

}





ngOnInit(): void {

}

verAlbum(){
  this.router.navigate(['/album', this.idx ]);

}

}
