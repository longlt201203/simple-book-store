import { DbConstants } from "@db/db.constants";

const { ColumnName } = DbConstants;

export interface BookModel {
	[ColumnName.Book.id]: number;
	[ColumnName.Book.title]: string;
	[ColumnName.Book.remain]: number;
	[ColumnName.Global.createdAt]: string;
	[ColumnName.Global.modifiedAt]: string;
}
