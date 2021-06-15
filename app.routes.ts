import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ConciertosComponent } from './conciertos/conciertos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AlbumesComponent } from '../app/albumes/albumes.component'
import {AlbumComponent} from './album/album.component'

const APP_ROUTES : Routes = [
     {path: 'home', component: HomeComponent},
     {path: 'conciertos', component: HomeComponent},
     {path: 'playlists', component: PlaylistsComponent},
     {path: 'contacto', component: ContactoComponent},
     {path: 'conciertos', component: ConciertosComponent},
     {path: 'albumes', component: AlbumesComponent},
     {path: 'album/:idx', component: AlbumComponent},
     {path: 'playlist/:idx', component: PlaylistComponent},
     {path: 'playlists', component: PlaylistsComponent},
     {path: '**', pathMatch:'full', redirectTo:'home'}
     
     

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);