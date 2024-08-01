import { AuthorService } from "@modules/author/author.service";
import { Controller } from "@nestjs/common";

@Controller("author")
export class AuthorController {
	constructor(private readonly authorSerive: AuthorService) {}
}
