import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCropperModule } from 'ngx-image-cropper';

import { InsideModule } from 'app/modules/inside/inside.module';
import { InnerFooterComponent } from 'app/components/inner/footer/inner.footer.component';

import { EditUserComponent } from './edit-user.component';
import { ImagesColumnComponent } from './images-column/images-column.component';
import { CommunicationColumnComponent } from './communication-column/communication-column.component';
import { ModalAvatarComponent } from './modal-avatar/modal-avatar.component';
import { UserAvatarComponent } from './images-column/avatar/user-avatar.component';
import { AvatarChatUserBoxComponent } from './modal-avatar/chat-user-box/chat-user-box.component';

@NgModule({
  imports: [
    RouterModule,
    InsideModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    NgxDropzoneModule,
    ImageCropperModule,
  ],
  declarations: [
    EditUserComponent,
    ImagesColumnComponent,
    CommunicationColumnComponent,
    InnerFooterComponent,
    ModalAvatarComponent,
    UserAvatarComponent,
    AvatarChatUserBoxComponent,
  ],
  providers: [],
  bootstrap: [EditUserComponent],
})
export class EditUserModule {}
