import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeDashboardComponent } from './recipe-book/recipe-dashboard/recipe-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeDashboardComponent },
  { path: 'shopping', component: ShoppingListComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
