import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiBearerAuth,
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/authDto.dto";
import { createUserDto } from "./dto/createUserDto.dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post("register")
  @ApiResponse({ description: "User has been created" })
  @ApiForbiddenResponse({ description: "Forbidden" })
  register(@Body() createDto: createUserDto) {
    return this.authservice.register(createDto);
  }

  @Post("login")
  //   @ApiCookieAuth('jwt')
  @ApiResponse({ description: "User has been created" })
  @ApiForbiddenResponse({ description: "Forbidden" })
  login(
    @Body() authDto: AuthDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return this.authservice.login(authDto, response);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get("user")
  @ApiBearerAuth()
  async user(@Req() request: Request) {
    console.log('===--->',request);
    return 'sdfsd';
  }
}
