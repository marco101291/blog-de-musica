import { Component, OnInit } from '@angular/core';
import { PlaylistsService, Playlist } from '../services/playlists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[]=[];

  constructor(private _playlistsService: PlaylistsService, private router: Router) { }

  ngOnInit(): void {
    this.playlists= this._playlistsService.getPlaylists();
  }

  verPlaylist(idx: number){
    this.router.navigate(['/playlist', idx])
  }

}
