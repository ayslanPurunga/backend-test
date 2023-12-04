import { IsEmail, IsNotEmpty } from "class-validator";

export class InvestmentDTO {
  @IsEmail()
  owner: string;

  @IsNotEmpty()
  initial_amount: number;

  creation_date: Date;
}