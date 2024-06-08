import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
    @Get()
    getHealth(): { message: string } {
        return { "message": "OK" };
    }
}
