import { AuthorController } from "@modules/author/author.controller";
import { AuthorService } from "@modules/author/author.service";
import { Module } from "@nestjs/common";

@Module({
	providers: [AuthorService],
	controllers: [AuthorController],
})
export class AuthorModule {}
