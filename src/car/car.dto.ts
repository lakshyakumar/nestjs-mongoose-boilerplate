import { ApiProperty } from "@nestjs/swagger";

export class CarDto {
    @ApiProperty({ default: 1 })
    readonly id: number;
    @ApiProperty({ default: "BMW" })
    readonly brand: string;
    @ApiProperty({ default: "Gold" })
    readonly color: string;
    @ApiProperty({ default: "BMW X5" })
    readonly model: string;
}