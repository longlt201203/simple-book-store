import { DbConstants } from "@db/db.constants";

const { ColumnName } = DbConstants;

export interface BorrowModel {
	[ColumnName.Borrow.id]: number;
	[ColumnName.Borrow.borrowerName]: string;
	[ColumnName.Borrow.borrowerAddress]: string;
	[ColumnName.Borrow.borrowedAt]: string;
	[ColumnName.Borrow.returnedAt]: string;
}
