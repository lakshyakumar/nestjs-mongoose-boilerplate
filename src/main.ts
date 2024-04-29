import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { transports, format } from 'winston';
import { ConfigService } from '@nestjs/config';
import 'winston-daily-rotate-file';

const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3

  }, colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    debug: "blue"

  }
}

/**
 * Boots the NestJS application.
 * Configures logging, CORS, Swagger documentation, and starts the server.
 */
async function bootstrap() {
  // Initialize ConfigService
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule, {
    // Configure CORS settings
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      allowedHeaders: '*',
    },
    // Configure Winston logger
    logger: WinstonModule.createLogger({
      levels: customLevels.levels,
      format: format.json(),
      transports: [
        new transports.Console(
          {
            format: format.combine(
              format.colorize({ all: true }),
              format.simple()
            )
          }
        ),
        new transports.File(
          {
            filename: "./logs/error.log",
            level: "error",
          }
        ),
        new transports.File(
          {
            filename: "./logs/combine.log"
          }
        ),
      ],
    }),
  });

  // Configure Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Nestjs-Mongoose-CRUD Boilerplate Docs')
    .setDescription('Car Managment CRUD APIs')
    .setVersion('1.0')
    .addTag('nest-mongoose-boilerplate')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start the server
  await app.listen(
    configService.get<number>('PORT') || 3000,
    configService.get<string>('HOST') || "127.0.0.1",
  );
}

// Call the bootstrap function to start the application
bootstrap();
