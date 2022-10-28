import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller('api/v1/alunos/')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post('create')
  create(@Body() body: CreateAlunoDto) {
    return this.alunosService.create(body);
  }

  @Get('findAll')
  findAll() {
    return this.alunosService.findAll();
  }

  @Get('findOne/:ra')
  findOne(@Param('ra') ra: string) {
    return this.alunosService.findOne(ra);
  }

  @Patch('update/:ra')
  update(@Param('ra') ra: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(ra, updateAlunoDto);
  }

  @Delete('delete/:ra')
  remove(@Param('ra') ra: string) {
    return this.alunosService.remove(ra);
  }
}
