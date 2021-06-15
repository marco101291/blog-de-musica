import { Component, OnInit} from '@angular/core';
import { AlbumsService, Album } from '../services/albums.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {
  albumes: Album[]=[];
  constructor(private _albumsService: AlbumsService, private router: Router) {
  }

  ngOnInit(): void {
    this.albumes= this._albumsService.getAlbumes(); 
  }

  verAlbum(idx: number){
    this.router.navigate(['/album', idx ]);
  }

}
