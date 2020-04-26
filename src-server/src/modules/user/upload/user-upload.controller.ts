import {
  Controller,
  UseGuards,
  Post,
  UseInterceptors,
  UploadedFiles,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiConsumes,
  ApiOperation,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { fiAvatar } from 'util/interceptors';

import { UserUploadService } from './user-upload.service';
import { AvatarUploadDTO } from '../dto/avatar.upload.dto';
import { UserAvatarValidationPipe } from '../pipes/user-avatar.validation.pipe';
import { swFile, swSchema } from 'util/swagger/constants.file';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { limitMb } from 'util/interceptors/file-limits';

@Controller('/user')
@ApiTags('User Files')
@UseGuards(JwtAuthGuard)
export class UserUploadController {
  constructor(private readonly userUploadService: UserUploadService) {}

  @Post('/avatar')
  @UseInterceptors(fiAvatar)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'User upload avatar' })
  @ApiBody(
    swSchema({
      'avatar-full': swFile,
      'avatar-cropped': swFile,
      'avatar-min': swFile,
    }),
  )
  // @ApiOkResponse({ description: 'user.certificateUploaded' })
  // @ApiBadRequestResponse({
  //   description: 'user.fileNotFound | user.roleNotFileSlots',
  // })
  // @ApiNotFoundResponse({ description: 'user.notFound' })
  async uploadAvatar(@UploadedFiles() files, @Request() req) {
    console.log(req.user);
    console.log(req.headers);
    // console.log(files);
    return true;
  }
}
