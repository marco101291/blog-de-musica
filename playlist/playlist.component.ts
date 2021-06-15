import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PlaylistsService } from '../services/playlists.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent{
  playlist: any = {};

  constructor(private activatedRoute: ActivatedRoute, 
              private _playlistsService: PlaylistsService
              ){
      this.activatedRoute.params.subscribe(params => {
      this.playlist = this._playlistsService.getPlaylist(params['idx']);
   })

}
}

