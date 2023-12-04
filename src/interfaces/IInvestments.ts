import { InvestmentDTO } from "../dto/InvestmentDTO"
import { Investment } from "../entities/Investment"

interface IInvestments {
  create(data: InvestmentDTO): Promise<void>
  findByName(owner: string): Promise<Investment>
}

export { IInvestments }