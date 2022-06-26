import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'https://beaproblemchild.tk', "http://192.168.8.129:3000", "https://fascinating-meringue-3c77f1.netlify.app"],
  });
  await app.listen(process.env.PORT || 8888);
}
bootstrap();
