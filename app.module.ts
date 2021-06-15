import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Dependencias
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Rutas
import { APP_ROUTING } from './app.routes'

//Componentes
import { PlaylistComponent } from './playlist/playlist.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { AlbumComponent } from './album/album.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { TarjetaAlbumComponent } from './tarjeta-album/tarjeta-album.component';
import { TarjetaPlaylistComponent } from './tarjeta-playlist/tarjeta-playlist.component';
import { ConciertosComponent } from './conciertos/conciertos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    PlaylistsComponent,
    AlbumComponent,
    AlbumesComponent,
    TarjetaAlbumComponent,
    TarjetaPlaylistComponent,
    ConciertosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
