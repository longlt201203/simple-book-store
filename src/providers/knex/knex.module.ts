import { DynamicModule, Global, Module } from "@nestjs/common";
import { KnexService } from "@providers/knex/knex.service";
import knex, { Knex } from "knex";

@Global()
@Module({})
export class KnexModule {
	static regsiter(config: Knex.Config): DynamicModule {
		return {
			module: KnexModule,
			providers: [
				{
					provide: "KNEX_CLIENT",
					useFactory: () => knex(config),
				},
				KnexService,
			],
			exports: ["KNEX_CLIENT", KnexService],
		};
	}
}
