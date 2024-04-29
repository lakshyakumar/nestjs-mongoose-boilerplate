import { HttpException, Injectable } from '@nestjs/common';
import { CarDto } from './car.dto';
import { ICar } from './interfaces/car.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarService {

    constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) { }

    /**
    * Retrieves all cars from the database.
    * @returns Promise<CarDto[]> A promise that resolves to an array of car objects.
    * @throws HttpException If no cars are found in the database.
    */
    public async getCars(): Promise<CarDto[]> {
        const cars = await this.carModel.find().exec();
        if (!cars || !cars[0]) {
            throw new HttpException("Not Found", 404)
        }
        return cars;
    }

    /**
     * Creates a new car in the database.
     * @param newCar CarDto Data of the new car to be created.
     * @returns Promise<any> A promise representing the result of the operation.
     */
    public async postCar(newCar: CarDto) {
        const car = new this.carModel(newCar);
        return car.save();
    }

    /**
     * Retrieves a car by its ID from the database.
     * @param id number ID of the car to retrieve.
     * @returns Promise<CarDto> A promise that resolves to the car object.
     * @throws HttpException If the car with the specified ID is not found.
     */
    public async getCarById(id: number): Promise<CarDto> {
        const car = await this.carModel.findOne({ id }).exec();
        if (!car) {
            throw new HttpException("Not Found", 404)
        }
        return car;
    }

    /**
     * Deletes a car by its ID from the database.
     * @param id number ID of the car to delete.
     * @returns Promise<any> A promise representing the result of the operation.
     * @throws HttpException If the car with the specified ID is not found.
     */
    public async deleteCarById(id: number): Promise<any> {
        const car = await this.carModel.deleteOne({ id }).exec();
        if (car.deletedCount === 0) {
            throw new HttpException("Not Found", 404)
        }
        return car;
    }

    /**
     * Updates a car's property by its ID in the database.
     * @param id number ID of the car to update.
     * @param propertyName string Name of the property to update.
     * @param propertyValue string | number Value to set for the property.
     * @returns Promise<CarDto> A promise that resolves to the updated car object.
     * @throws HttpException If the car with the specified ID is not found.
     */
    public async putCarById(id: number, propertyName: string, propertyValue: string | number): Promise<CarDto> {
        const car = await this.carModel.findOneAndUpdate({ id }, { [propertyName]: propertyValue }).exec();
        if (!car) {
            throw new HttpException("Not Found", 404)
        }
        return car;
    }
}
