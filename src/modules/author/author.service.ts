import { DbConstants } from "@db";
import { Injectable } from "@nestjs/common";
import { KnexService } from "@providers/knex";

const { TableName, ColumnName } = DbConstants;

@Injectable()
export class AuthorService {
	constructor(private readonly knexService: KnexService) {}

	async test() {
		const qb = this.knexService.getKnexQb(TableName.Author);
		const data = await qb.then();
		console.log(data);
	}
}
