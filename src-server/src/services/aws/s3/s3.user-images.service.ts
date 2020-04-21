import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { extname } from 'path';
import * as AWS from 'aws-sdk';

@Injectable()
export class S3UserImagesService {
  s3: AWS.S3;
  bucketPrefix: string;

  constructor() {
    const awsConfig = this.getAwsConfig();
    this.s3 = new AWS.S3(awsConfig);
    this.bucketPrefix = this.getBucket();
  }

  private getAwsConfig() {
    if (
      !process.env.AWS_REGION ||
      !process.env.AWS_ACCESS_KEY_ID ||
      !process.env.AWS_ACCESS_KEY_SECRET
    ) {
      console.log('No AWS credentials');
      process.exit(1);
    }
    return {
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
      apiVersion: '2006-03-01',
    };
  }

  private getBucket() {
    const bucket = process.env.AWS_BUCKET;
    if (!bucket) {
      console.log('No S3 bucket selected');
      process.exit(1);
    }
    return bucket;
  }

  private uploadToBucket(folder, file, useOriginalName = false) {
    const Bucket = `${this.bucketPrefix}/${folder}`;
    const params = {
      ACL: 'public-read',
      Key: useOriginalName
        ? file.originalname
        : `${uuid()}${extname(file.originalname)}`,
      ContentType: file.mimetype,
      Bucket,
      Body: file.buffer,
    };

    return this.s3.upload(params).promise();
  }

  private deleteFromBucket(folder, src) {
    const Bucket = `${this.bucketPrefix}/${folder}`;
    const splitPath = src.split(`${folder}/`);
    if (splitPath.length !== 2) {
      return Promise.resolve();
    }
    const params = {
      Bucket,
      Key: splitPath[1],
    };
    return this.s3.deleteObject(params).promise();
  }

  private async downloadFromBucket(folder, src) {
    const Bucket = `${this.bucketPrefix}/${folder}`;
    const splitPath = src.split(`${folder}/`);
    if (splitPath.length !== 2) {
      const error = new Error(
        `File has path ${src}, but bucket folder "${folder}" not exist in this path`,
      );
      return { binary: null, err: error };
    }
    const params = {
      Bucket,
      Key: splitPath[1],
    };

    let binary;
    try {
      binary = await this.s3.getObject(params).promise();
    } catch (err) {
      return { binary: null, err };
    }

    return { binary };
  }
}
