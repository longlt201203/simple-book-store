export const DbConstants = {
	TableName: {
		Author: "sbs_Author",
		Book: "sbs_Book",
		Borrow: "sbs_Borrow",
		BorrowItem: "sbs_BorrowItem",
	},

	ColumnName: {
		Global: {
			createdAt: "dtCreatedAt",
			modifiedAt: "dtModifiedAt",
		},

		Author: {
			id: "n4AuthorID",
			name: "strAuthorName",
		},

		Book: {
			id: "n4BookID",
			title: "strBookTitle",
			remain: "n4Remain",
		},

		Borrow: {
			id: "n4BorrowID",
			borrowerName: "strBorrowerName",
			borrowerAddress: "strBorrowerAddress",
			borrowedAt: "dtBorrowedAt",
			returnedAt: "dtReturnedAt",
		},

		BorrowItem: {
			id: "n4BorrowItemID",
		},
	},
} as const;
