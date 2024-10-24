import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('players')
export class Authentication {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    
}
