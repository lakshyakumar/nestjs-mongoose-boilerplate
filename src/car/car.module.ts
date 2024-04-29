import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './schema/car.schema';

@Module({
  // Import Mongoose module and define the 'Car' model
  imports: [MongooseModule.forFeature([{
    name: 'Car',
    schema: CarSchema
  }])],
  // Provide the CarService to the module
  providers: [CarService],
  // Provide the CarController to the module
  controllers: [CarController]
})
export class CarModule { }
