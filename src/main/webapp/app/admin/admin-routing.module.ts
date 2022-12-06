import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* data2ml-needle-add-admin-module-import -- Add admin modules imports here */

@NgModule({
  imports: [
    /* data2ml-needle-add-admin-module - Add admin modules here */
    RouterModule.forChild([
      {
        path: 'docs',
        loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule),
      },
      /* data2ml-needle-add-admin-route - Add admin routes here */
    ]),
  ],
})
export class AdminRoutingModule {}
