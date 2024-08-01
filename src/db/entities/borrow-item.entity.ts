import { DbConstants } from "@db/db.constants";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

const { TableName, ColumnName } = DbConstants;

@Entity(TableName.BorrowItem)
export class BorrowItem {
	@PrimaryGeneratedColumn("increment", { name: ColumnName.BorrowItem.id })
	id: number;

	@Column({ type: "int", name: ColumnName.Borrow.id })
	borrowId: number;

	@Column({ type: "int", name: ColumnName.Book.id })
	bookId: number;
}
