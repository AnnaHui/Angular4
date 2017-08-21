import { NgModule, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
// import { CreateCharacterComponent } from './create-character/create-character.component';




//  if path is empty, must add pathMath: 'full';
const routes = [
  { path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':side', component: ListComponent }
  ]},
  { path: 'new-character', loadChildren: './create-character/create-character.module.ts#CreateCharacterModule' },
  { path: '**', redirectTo: '/characters' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {}
