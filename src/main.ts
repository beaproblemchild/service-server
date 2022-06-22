import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'https://beaproblemchild.tk'],
  });
  await app.listen(process.env.PORT || 8888);
}
bootstrap();
