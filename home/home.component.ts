import { Component, OnInit } from '@angular/core';
import { AlbumesComponent } from '../albumes/albumes.component';
import { Router } from '@angular/router'
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private _albumsService: AlbumsService) { }

  ngOnInit(): void {
  }

  verAlbum(idx: number){
    this.router.navigate(['/album', idx ]);

  }

}
