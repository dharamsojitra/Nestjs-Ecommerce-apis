import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CatgoryDocument = Document & Category

@Schema()
export class Category {
    @Prop({required:true,unique:true})
    name:string

    @Prop()
    slug:string

    @Prop({default:true})
    status:boolean
}

export const CategorySchema = SchemaFactory.createForClass(Category)