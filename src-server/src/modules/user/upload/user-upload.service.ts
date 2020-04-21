import { Injectable } from '@nestjs/common';

import { S3UserImagesService } from 'services/aws/s3/s3.user-images.service';

@Injectable()
export class UserUploadService {
  constructor(private readonly s3UserImagesService: S3UserImagesService) {}
}
