import { AppState } from "../AppState.js";
import { sandboxGiftsService } from "../services/SandboxGiftsServices.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class SandboxGiftsController {
  constructor() {
    AppState.on('user', this.getGifts)
    AppState.on('gifts', this.drawGifts)
  }

  drawGifts() {
    const gifts = AppState.gifts;
    let giftListCont = '';

    gifts.forEach(gift => giftListCont += gift.listTemplate);
    setHTML('gift-list', giftListCont)
  }

  async openGift(giftId) {
    try {
      await sandboxGiftsService.openGift(giftId)
    } catch (error) {
      Pop.error(error)
    }

  }

  async createGift() {
    event.preventDefault;
    const gifFormElem = event.target;
    const gifFormData = getFormData(gifFormElem);

    try {
      await sandboxGiftsService.createGift(gifFormData)
    } catch (error) {
      Pop.error(error)
    }
  }

  async getGifts() {
    try {
      await sandboxGiftsService.getGifts();
    } catch (error) {
      Pop.error(error);
    }
  }
}