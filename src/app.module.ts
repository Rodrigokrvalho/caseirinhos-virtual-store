import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './common/filters/HttpExeption.filter';
import { ProductsModule } from './resources/products/products.module';
import { SalesModule } from './resources/sales/sales.module';
import { AvaluationsModule } from './resources/avaluations/avaluations.module';

@Module({
  imports: [ProductsModule, SalesModule, AvaluationsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
