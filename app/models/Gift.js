export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
    this.profileIdsOpened = data.profileIdsOpened
  }

  get listOpenedTemplate() {
    return `
    <div class="col-md-4">
      <div class="gift">
        <div class="gift-img">
          <img class="img-fluid" src="${this.url}" alt="">
        </div>
        <div>
          <p>${this.tag}</p>
        </div>
      <div>
    </div>
    `
  }
}