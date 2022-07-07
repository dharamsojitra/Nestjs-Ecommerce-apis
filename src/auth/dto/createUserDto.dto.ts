import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class createUserDto{
    @ApiProperty({required:true})
    @Prop()
    name:string;

    @ApiProperty({required:true})
    @Prop()
    email:string;

    @ApiProperty({required:true})
    @Prop()
    password:string;
}