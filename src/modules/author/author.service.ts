import { DbConstants } from "@db";
import { Author } from "@db/entities";
import { AuthorModel } from "@db/models";
import { Inject, Injectable } from "@nestjs/common";
import { KnexService } from "@providers/knex";
import { Knex } from "knex";
import { DataSource } from "typeorm";

const { TableName, ColumnName } = DbConstants;

@Injectable()
export class AuthorService {
	constructor(
		@Inject("KNEX_CLIENT")
		private readonly client: Knex,
		private readonly knexService: KnexService,
		private readonly datasource: DataSource,
	) {}

	async test() {
		const qb2 = this.client
			.columns(ColumnName.Author.id)
			.select()
			.from<AuthorModel>(TableName.Author)
			.where(ColumnName.Author.id, 1)
			.unionAll([
				this.client
					.select(ColumnName.Author.id)
					.from<AuthorModel>(TableName.Author)
					.where(ColumnName.Author.id, 2),
			]);

		console.log(qb2.toSQL());
		const data2 = await qb2.then<AuthorModel[]>();

		console.log(data2);
	}

	async create() {
		await this.client.transaction((trx) => {});
		const qb = this.client
			.insert({ [ColumnName.Author.name]: "" })
			.into(TableName.Author);
	}
}
