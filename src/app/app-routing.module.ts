import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'hacer',
    loadChildren: () => import('./hacer/hacer.module').then( m => m.HacerPageModule)
  },  {
    path: 'mujeres',
    loadChildren: () => import('./sugerencias/mujeres/mujeres.module').then( m => m.MujeresPageModule)
  },
  {
    path: 'hombres',
    loadChildren: () => import('./sugerencias/hombres/hombres.module').then( m => m.HombresPageModule)
  },
  {
    path: 'amigos',
    loadChildren: () => import('./sugerencias/amigos/amigos.module').then( m => m.AmigosPageModule)
  },
  {
    path: 'denuncia',
    loadChildren: () => import('./sugerencias/denuncia/denuncia.module').then( m => m.DenunciaPageModule)
  },
  {
    path: 'apoyo',
    loadChildren: () => import('./apoyo/apoyo.module').then( m => m.ApoyoPageModule)
  }



];

@NgModule({
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
