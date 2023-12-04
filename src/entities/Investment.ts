import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidV4} from "uuid";

@Entity("investments")
export class Investment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 50 })
  owner: string;

  @Column()
  initial_amount: number;

  @Column({ nullable: true })
  withdraw_amount: number;

  @Column({ nullable: true })
  withdraw_date: Date;

  @Column({default: ()=>'CURRENT_TIMESTAMP'})
  creation_date: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}