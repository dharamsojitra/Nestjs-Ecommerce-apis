import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CatgoryDocument } from 'src/schema/category.shema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private categoryModel : Model<CatgoryDocument>){}

  async create(createCategoryDto: CreateCategoryDto) {
    let vefityCategory = await this.categoryModel.findOne({name:createCategoryDto.name});

    if (vefityCategory) {
      throw new HttpException({
        status:HttpStatus.BAD_REQUEST,
        error:"Category is already exist!"
      },HttpStatus.BAD_REQUEST);
    }

    let category = new this.categoryModel(createCategoryDto);

    return category;
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: string) {
    return `This action returns a #${id} category`;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    let vefityCategory = await this.categoryModel.findOne({name:updateCategoryDto.name});

    if (vefityCategory) {
      throw new HttpException({
        status:HttpStatus.BAD_REQUEST,
        error:"Category is already exist!"
      },HttpStatus.BAD_REQUEST);
    }

    let category = this.categoryModel.findByIdAndUpdate(updateCategoryDto);

    return category;
  }

  remove(id: string) {
    return `This action removes a #${id} category`;
  }
}
