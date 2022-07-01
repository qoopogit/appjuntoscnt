import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  },  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'test-cyber-acoso',
    loadChildren: () => import('./test-cyber-acoso/test-cyber-acoso.module').then( m => m.TestCyberAcosoPageModule)
  },
  {
    path: 'test-soy-violento',
    loadChildren: () => import('./test-soy-violento/test-soy-violento.module').then( m => m.TestSoyViolentoPageModule)
  },
  {
    path: 'test-sufro-mobbing',
    loadChildren: () => import('./test-sufro-mobbing/test-sufro-mobbing.module').then( m => m.TestSufroMobbingPageModule)
  },
  {
    path: 'test-sufro-violencia',
    loadChildren: () => import('./test-sufro-violencia/test-sufro-violencia.module').then( m => m.TestSufroViolenciaPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
