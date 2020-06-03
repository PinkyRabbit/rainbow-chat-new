import {
  Controller,
  UseGuards,
  Request,
  Get,
  Query,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

// import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { SearchTransformationPipe } from 'pipes/search-transformation.pipe';

import { UserSearchService } from '../services/user-search.service';

@Controller('/search/user')
@ApiTags('User Search')
// @UseGuards(JwtAuthGuard)
export class UserSearchController {
  constructor(private readonly userSearchService: UserSearchService) {}

  @ApiOperation({ summary: 'Test if username is bisy or not' })
  @ApiQuery({ type: String, name: 's' })
  @Get('/exists')
  @UsePipes(SearchTransformationPipe)
  async uploadAvatar(@Query() query) {
    if (!query.s) {
      throw new BadRequestException();
    }
    return await this.userSearchService.isUsernameExists(query.s);
  }
}
