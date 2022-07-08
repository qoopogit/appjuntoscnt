import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./principal/principal.module').then((m) => m.PrincipalPageModule),
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./intro/intro.module').then((m) => m.IntroPageModule),
  },
  {
    path: 'principal',
    loadChildren: () =>
      import('./principal/principal.module').then((m) => m.PrincipalPageModule),
  },
  {
    path: 'acerca',
    loadChildren: () =>
      import('./acerca/acerca.module').then((m) => m.AcercaPageModule),
  },
  {
    path: 'hacer',
    loadChildren: () =>
      import('./hacer/hacer.module').then((m) => m.HacerPageModule),
  },

  {
    path: 'test',
    loadChildren: () =>
      import('./test/test.module').then((m) => m.TestPageModule),
  },
  {
    path: 'test-cyber-acoso',
    loadChildren: () =>
      import('./test-cyber-acoso/test-cyber-acoso.module').then(
        (m) => m.TestCyberAcosoPageModule
      ),
  },
  {
    path: 'test-soy-violento',
    loadChildren: () =>
      import('./test-soy-violento/test-soy-violento.module').then(
        (m) => m.TestSoyViolentoPageModule
      ),
  },
  {
    path: 'test-sufro-mobbing',
    loadChildren: () =>
      import('./test-sufro-mobbing/test-sufro-mobbing.module').then(
        (m) => m.TestSufroMobbingPageModule
      ),
  },
  {
    path: 'test-sufro-violencia',
    loadChildren: () =>
      import('./test-sufro-violencia/test-sufro-violencia.module').then(
        (m) => m.TestSufroViolenciaPageModule
      ),
  },
  {
    path: 'mujeres',
    loadChildren: () =>
      import('./sugerencias/mujeres/mujeres.module').then(
        (m) => m.MujeresPageModule
      ),
  },
  {
    path: 'hombres',
    loadChildren: () =>
      import('./sugerencias/hombres/hombres.module').then(
        (m) => m.HombresPageModule
      ),
  },
  {
    path: 'amigos',
    loadChildren: () =>
      import('./sugerencias/amigos/amigos.module').then(
        (m) => m.AmigosPageModule
      ),
  },
  {
    path: 'denuncia',
    loadChildren: () =>
      import('./sugerencias/denuncia/denuncia.module').then(
        (m) => m.DenunciaPageModule
      ),
  },
  {
    path: 'apoyo',
    loadChildren: () =>
      import('./apoyo/apoyo.module').then((m) => m.ApoyoPageModule),
  },
  {
    path: 'refugio',
    loadChildren: () =>
      import('./apoyo/refugio/refugio.module').then((m) => m.RefugioPageModule),
  },
  {
    path: 'integral',
    loadChildren: () =>
      import('./apoyo/integral/integral.module').then((m) => m.IntegralPageModule),
  },
  {

    path: 'zona/:id',
    loadChildren: () =>
      import('./apoyo/integral/zonas/zonas.module').then((m) => m.ZonasPageModule),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
