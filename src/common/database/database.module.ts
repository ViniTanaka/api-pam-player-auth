import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseProviders } from "./database.provider";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'pam',
            entities: [],
            synchronize: true,
            
        })
    ],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})

export class DatabaseModule{}