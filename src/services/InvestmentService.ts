import "reflect-metadata";
import { Investment } from "../entities/Investment";
import { AppDataSource } from "../data-source";
import { InvestmentDTO } from "../dto/InvestmentDTO";


export class CreateInvestmentService {
    async execute({ owner, amount, date }: InvestmentDTO): Promise<Investment> {
        
        const repository = AppDataSource.getRepository(Investment);
        const investment = repository.create({
            owner,
            amount,
            date,
        });

        return investment;
    }
}