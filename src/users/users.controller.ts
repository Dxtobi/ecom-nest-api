import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SignInDto } from './dto/signin.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userSignUpDto } from './dto/user-signup.dto';
import { UserEntity } from './entities/user.entity';
import { Roles as Role } from '../utils/common/users-roles.enum';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { RolesGuard } from 'src/auth/guards/role/role.guard';
import { Roles } from 'src/auth/decorators/role/role.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() userSignUpDto: userSignUpDto): Promise<UserEntity> {
    try {
      return await this.usersService.signup(userSignUpDto);
    } catch (error) {
      //console.log(error.message);
      return error.response;
    }
  }

  @Post('signin')
  async create(@Body() SignInDto: SignInDto): Promise<{
    accessToken: string;
    user: UserEntity;
  }> {
    try {
      const user = await this.usersService.signin(SignInDto);
      const accessToken = await this.usersService.accessToken(user);
      return {
        accessToken,
        user,
      };
    } catch (error) {
      //console.log(error);
      return error.response;
    }
  }

  @Roles(Role.ADMIN)
  @Get('all')
  @UseGuards(AuthGuard, RolesGuard)
  async findAll(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  // @Roles(Role.ADMIN, Role.SHOP)
  @Get(':id')
  @UseGuards(AuthGuard, RolesGuard)
  async findOne(@Param('id') id: string): Promise<
    | UserEntity
    | {
        error: string;
      }
  > {
    try {
      //console.log(req?.user);
      return await this.usersService.findOne(+id);
    } catch (err) {
      return { error: 'something went wrong' };
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
