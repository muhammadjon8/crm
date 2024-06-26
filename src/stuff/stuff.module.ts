import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stuff])],
  controllers: [StuffController],
  providers: [StuffService],
})
export class StuffModule {}
