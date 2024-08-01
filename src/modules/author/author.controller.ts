import { AuthorService } from "@modules/author/author.service";
import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller("author")
@ApiTags("Author")
export class AuthorController {
	constructor(private readonly authorSerive: AuthorService) {}

	@Get()
	listAuthor() {
		this.authorSerive.test();
		return "OK";
	}
}
