import { Inject, Injectable } from "@nestjs/common";
import { Knex } from "knex";

@Injectable()
export class KnexService {
	constructor(
		@Inject("KNEX_CLIENT")
		private readonly client: Knex,
	) {}

	getKnexQb<T>(tbName: string) {
		return this.client<T>(tbName);
	}
}
