import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Injectable()
export class AlunosService {

  constructor(private prisma: PrismaService) {}

  async create(createAlunoDto: CreateAlunoDto) {

    return await this.prisma.alunos.create({
      data: createAlunoDto
    })

  }

  async findAll() {
    return await this.prisma.alunos.findMany()
    .then((values: any) => {
      return values.map((value: any) => {
        return {
          ...value,
          acoes: ['visualizar','alterar','excluir']
        }
      })
    });
  }

  async findOne(ra: string) {
    return await this.prisma.alunos.findUnique({
      where: {
        ra: ra
      },
    });
  }

  async update(ra: string, updateAlunoDto: UpdateAlunoDto) {
    return await this.prisma.alunos.update({
      where: {
        ra: ra
      },
     data: updateAlunoDto ,
    })
  }

  async remove(ra: string) {
    return await this.prisma.alunos.delete({
      where: {
        ra: ra
      }
    })
  }
}
