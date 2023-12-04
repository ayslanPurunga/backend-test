import "reflect-metadata";
import { Investment } from "../entities/Investment";
import { AppDataSource } from "../data-source";

type InvestmentRequest = {
    owner: string;
    amount: number;
    date: Date;
}

export class CreateInvestmentService {
    async execute({ owner, amount, date }: InvestmentRequest): Promise<Investment> {
        
        const repository = AppDataSource.getRepository(Investment);
        const investment = repository.create({
            owner,
            amount,
            date,
        });

        return investment;
    }
}