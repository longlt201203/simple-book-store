import { AuthorService } from "@modules/author/author.service";
import { Module } from "@nestjs/common";

@Module({
	providers: [AuthorService],
})
export class AuthorModule {}
