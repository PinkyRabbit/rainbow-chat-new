import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

const isProduction = process.env.NODE_ENV === 'production';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (!isProduction) {
      // eslint-disable no-console
      console.log('---- EXCEPTION:');
      console.log(exception);
      console.log('>');
      // eslint-enable no-console
    }

    let errorObject: any = {
      statusCode: 404,
      message: 'Server error',
      error: 'Page not found',
    };

    if (exception instanceof HttpException) {
      const res: any = exception.getResponse();
      const { error, message: untypedMessage, statusCode } = res;
      errorObject = {
        error,
        statusCode,
        message: untypedMessage,
      };

      if (Array.isArray(untypedMessage)) {
        if (typeof untypedMessage[0] !== 'string') {
          const [message] = untypedMessage;
          errorObject.message = message.property;
        }
        return response.status(errorObject.statusCode).json(errorObject);
      }
      if (typeof untypedMessage !== 'string') {
        errorObject.message = 'Unknown error';
      }
    }

    if (exception instanceof HttpException === false) {
      // if (isNormalOutput && exception instanceof HttpException === false) {
      errorObject.statusCode = 500;
      errorObject.error =
        exception.name || exception.type || 'Unkonwn server error';
      errorObject.message =
        exception.error || exception.message || 'Unkonwn server error';
      if (/JSON/.test(errorObject.message)) {
        const nestedError = JSON.parse(errorObject.message);
        if (nestedError.JSON) {
          errorObject = nestedError.JSON;
        }
      }
    }

    return response.status(errorObject.statusCode).json(errorObject);
  }
}
