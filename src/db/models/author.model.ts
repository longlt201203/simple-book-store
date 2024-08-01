import { DbConstants } from "@db/db.constants";

const { ColumnName } = DbConstants;

export interface AuthorModel {
	[ColumnName.Author.id]?: number;
	[ColumnName.Author.name]?: number;
	[ColumnName.Global.createdAt]?: string;
	[ColumnName.Global.modifiedAt]?: string;
}
