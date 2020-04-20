import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { InsideModule } from 'app/modules/inside/inside.module';
import { NavbarModule } from 'app/components/navbar/navbar.module';

import { EditUserComponent } from './edit-user.component';
import { ImagesColumnComponent } from './images-column/images-column.component';
import { CommunicationColumnComponent } from './communication-column/communication-column.component';
import { InnerFooterComponent } from 'app/components/inner/footer/inner.footer.component';

@NgModule({
  imports: [
    RouterModule,
    InsideModule,
    NavbarModule,
    CommonModule,
    AngularSvgIconModule,
    NgxDropzoneModule,
  ],
  declarations: [
    EditUserComponent,
    ImagesColumnComponent,
    CommunicationColumnComponent,
    InnerFooterComponent,
  ],
  providers: [],
  bootstrap: [EditUserComponent],
})
export class EditUserModule {}
