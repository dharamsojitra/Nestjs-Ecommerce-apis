import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty({required:true})
    name:string

    @ApiProperty()
    slug:string

    @ApiProperty({default:true})
    status:boolean
}
