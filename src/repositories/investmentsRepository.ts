import { Repository } from "typeorm";
import { InvestmentDTO } from "../dto/InvestmentDTO";
import { Investment } from "../entities/Investment";
import { AppDataSource } from "../data-source";
import { IInvestments } from "../interfaces/IInvestments";

class InvestmentsRepository implements IInvestments {

    private repository: Repository<Investment>

    constructor() {
        this.repository = AppDataSource.getRepository(Investment)
    }

    async create({ owner, initial_amount }: InvestmentDTO): Promise<void> {
        const investment = this.repository.create({
            owner,
            initial_amount,
        });

        await this.repository.save(investment);

    }

    async list(): Promise<Investment[]> {
        const investment = await this.repository.find();
        return investment;
    }

    async findByName(owner: string): Promise<Investment> {
        const investment = await this.repository.findOne({ owner });
        return investment;
    }
}

export { InvestmentsRepository };
