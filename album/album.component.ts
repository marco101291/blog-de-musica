import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  album: any = {};

  

  constructor(private activatedRoute: ActivatedRoute, 
              private _albumsService: AlbumsService
              ){ 
      this.activatedRoute.params.subscribe(params => {
      this.album = this._albumsService.getAlbum(params['idx']);
      
  })
  

}


}
