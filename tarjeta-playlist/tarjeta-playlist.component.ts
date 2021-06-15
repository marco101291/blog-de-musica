import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-playlist',
  templateUrl: './tarjeta-playlist.component.html',
  styleUrls: ['./tarjeta-playlist.component.css']
})
export class TarjetaPlaylistComponent implements OnInit {

  @Input () playlist: any = {};
  @Input () idx?: number;
  @Output () playlistSeleccionada: EventEmitter<number>;

  constructor(private router: Router) {
    this.playlistSeleccionada= new EventEmitter();
   }

  ngOnInit(): void {
  }

  verPlaylist(){
    this.router.navigate(['/playlist', this.idx ]);
  
  }

}
