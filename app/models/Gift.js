export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
    this.profileIdsOpened = data.profileIdsOpened
    this.id = data.id
  }

  get listTemplate() {
    return `
    <div class="col-md-4">
      <div class="gift">
        <div class="gift-img">
          <img onclick="app.SandboxGiftsController.openGift('${this.id}')" class="img-fluid selectable" src="${this.url}" alt="">
        </div>
        <div class="text-center">
          <h6>${this.tag}</h6>
        </div>
      </div>
    </div>
    `
  }
}