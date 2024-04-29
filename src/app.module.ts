import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [CarModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => require('../config/config.json'),
      ],
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get<string>(
          'MONGO_USER',
        )}:${configService.get<string>(
          'MONGO_PASS',
        )}@${configService.get<string>('mongoUrl')}/${configService.get<string>(
          'collection',
        )}?retryWrites=true&w=majority`,
      }),
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
