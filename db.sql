CREATE TABLE `sbs_Author` (
  `n4AuthorID` int NOT NULL AUTO_INCREMENT,
  `strAuthorName` varchar(255) NOT NULL,
  `dtCreatedAt` datetime(6) NOT NULL DEFAULT (CURRENT_TIMESTAMP(6)),
  `dtModifiedAt` datetime(6) NOT NULL DEFAULT (CURRENT_TIMESTAMP(6)),
  PRIMARY KEY (`n4AuthorID`)
);

CREATE TABLE `sbs_Book` (
  `n4BookID` int NOT NULL AUTO_INCREMENT,
  `strBookTitle` varchar(255) NOT NULL,
  `n4Remain` int NOT NULL,
  `n4AuthorID` int NOT NULL,
  `dtCreatedAt` datetime(6) NOT NULL DEFAULT (CURRENT_TIMESTAMP(6)),
  `dtModifiedAt` datetime(6) NOT NULL DEFAULT (CURRENT_TIMESTAMP(6)),
  PRIMARY KEY (`n4BookID`)
);

CREATE TABLE `sbs_Borrow` (
  `n4BorrowID` int NOT NULL AUTO_INCREMENT,
  `strBorrowerName` varchar(255) NOT NULL,
  `strBorrowerAddress` varchar(255) NOT NULL,
  `dtBorrowedAt` datetime(6) NOT NULL DEFAULT (CURRENT_TIMESTAMP(6)),
  `dtReturnedAt` datetime(6) DEFAULT null,
  PRIMARY KEY (`n4BorrowID`)
);

CREATE TABLE `sbs_BorrowItem` (
  `n4BorrowItemID` int NOT NULL AUTO_INCREMENT,
  `n4BorrowID` int NOT NULL,
  `n4BookID` int NOT NULL,
  PRIMARY KEY (`n4BorrowItemID`)
);