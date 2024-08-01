import { DbConstants } from "@db/db.constants";

const { ColumnName } = DbConstants;

export interface BorrowItemModel {
	[ColumnName.BorrowItem.id]: number;
	[ColumnName.Borrow.id]: number;
	[ColumnName.Book.id]: number;
}
