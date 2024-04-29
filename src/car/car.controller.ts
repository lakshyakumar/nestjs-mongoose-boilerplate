import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('car')
export class CarController {
    constructor(private carService: CarService) { }

    /**
     * Retrieves all cars.
     * @returns Promise<CarDto[]> A promise that resolves to an array of car objects.
     */
    @Get()
    public async getCars() {
        return await this.carService.getCars();
    }

    /**
     * Creates a new car.
     * @param car CarDto The data of the car to be created.
     * @returns Promise<any> A promise representing the result of the operation.
     */
    @Post()
    public async postCars(@Body() car: CarDto) {
        return await this.carService.postCar(car);
    }

    /**
     * Retrieves a car by its ID.
     * @param id number The ID of the car to retrieve.
     * @returns Promise<CarDto> A promise that resolves to the car object.
     */
    @Get(':id')
    public async getCarById(@Param('id') id: number) {
        return await this.carService.getCarById(id);
    }

    /**
     * Deletes a car by its ID.
     * @param id number The ID of the car to delete.
     * @returns Promise<any> A promise representing the result of the operation.
     */
    @Delete(':id')
    public async deleteCarById(@Param('id') id: number) {
        return await this.carService.deleteCarById(id);
    }

    /**
     * Updates a car's property by its ID.
     * @param id number The ID of the car to update.
     * @param query Object The query object containing the property and value to update.
     * @returns Promise<CarDto> A promise that resolves to the updated car object.
     */
    @Put(':id')
    public async putCarById(@Param('id') id: number, @Query() query) {
        const property = query.property;
        const value = query.value;
        return await this.carService.putCarById(id, property, value);
    }
}
