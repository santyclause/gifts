import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";

class SandboxGiftsService {


  async openGift(giftId) {
    const giftData = { opened: true }
    const response = await api.put(`api/gifts/${giftId}`, giftData)
    let index = AppState.gifts.findIndex(gift => gift.id == response.data.id)
    AppState.gifts.splice(index, 1, new Gift(response.data))
  }

  async createGift(giftData) {
    const response = await api.post('api/gifts', giftData)
    console.log(giftData, response.data)
    AppState.gifts.push(new Gift(response.data))
  }

  async getGifts() {
    const response = await api.get('api/gifts');

    const createGifts = response.data.map(gift => new Gift(gift))

    // const createGifts = response.data.map(gift => {
    //   if (gift.opened == false) {
    //     return new Gift(gift)
    //   }
    // })

    // const unopenedGifts = createGifts.filter(gift => {
    //   return gift instanceof Gift
    // })

    // let newGifts = [];

    // for (let i = 0; i < 9; i++) {
    //   let rand = Math.floor(Math.random() * unopenedGifts.length);
    //   newGifts.push(unopenedGifts[rand]);
    //   console.log(rand);

    // }

    AppState.gifts = createGifts;
  }
}

export const sandboxGiftsService = new SandboxGiftsService();