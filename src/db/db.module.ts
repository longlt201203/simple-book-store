import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { datasource } from "./datasource";
import { KnexModule } from "@providers/knex";
import { Env } from "@utils";

@Module({
	imports: [
		KnexModule.regsiter({
			client: "mysql2",
			connection: {
				host: Env.DB_HOST,
				port: Env.DB_PORT,
				database: Env.DB_NAME,
				user: Env.DB_USER,
				password: Env.DB_PASS,
			},
		}),
	],
})
export class DbModule {}
