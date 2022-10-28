import { Prisma } from "@prisma/client";


export class CreateAlunoDto implements Prisma.AlunosUncheckedCreateInput{
  id?: number;
  nome: string;
  email: string;
  telefone?: string;
  ra: string;
  curso: string;
  classe: string;
  idade?: number;

}
