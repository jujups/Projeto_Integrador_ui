import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { EntrarComponent } from './entrar/entrar.component';
import { GrupoDestaquesComponent } from './grupo-destaques/grupo-destaques.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    GrupoDestaquesComponent,
    CadastrarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
