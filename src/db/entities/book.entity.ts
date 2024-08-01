import { DbConstants } from "@db/db.constants";
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

const { TableName, ColumnName } = DbConstants;

@Entity(TableName.Book)
export class Book {
	@PrimaryGeneratedColumn("increment", { name: ColumnName.Book.id })
	id: number;

	@Column({ type: "varchar", name: ColumnName.Book.title })
	title: string;

	@Column({ type: "int", name: ColumnName.Book.remain })
	remain: number;

	@Column({ type: "int", name: ColumnName.Author.id })
	authorId: number;

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
