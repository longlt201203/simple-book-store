import { DbConstants } from "@db/db.constants";
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

const { TableName, ColumnName } = DbConstants;

@Entity(TableName.Author)
export class Author {
	@PrimaryGeneratedColumn("increment", { name: ColumnName.Author.id })
	id: number;

	@Column({ type: "varchar", name: ColumnName.Author.name })
	name: string;

	@CreateDateColumn({
		type: "datetime",
		name: ColumnName.Global.createdAt,
		precision: 6,
	})
	createdAt: Date;

	@UpdateDateColumn({
		type: "datetime",
		name: ColumnName.Global.modifiedAt,
		precision: 6,
	})
	modifiedAt: Date;
}
