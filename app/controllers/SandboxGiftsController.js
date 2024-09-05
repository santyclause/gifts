import { sandboxGiftsService } from "../services/SandboxGiftsServices.js";

export class SandboxGiftsController {



  async getGifts() {
    await sandboxGiftsService.getGifts();
  }
}