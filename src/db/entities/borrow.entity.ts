import { DbConstants } from "@db/db.constants";
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

const { TableName, ColumnName } = DbConstants;

@Entity(TableName.Borrow)
export class Borrow {
	@PrimaryGeneratedColumn("increment", { name: ColumnName.Borrow.id })
	id: number;

	@Column({ type: "varchar", name: ColumnName.Borrow.borrowerName })
	borrowerName: string;

	@Column({ type: "varchar", name: ColumnName.Borrow.borrowerAddress })
	borrowerAddress: string;

	@CreateDateColumn({
		type: "datetime",
		precision: 6,
		name: ColumnName.Borrow.borrowedAt,
	})
	borrowedAt: Date;

	@Column({
		type: "datetime",
		precision: 6,
		name: ColumnName.Borrow.borrowedAt,
		nullable: true,
	})
	returnedAt: Date;
}
