import { AuthController } from './controllers/AuthController.js';
import { SandboxGiftsController } from './controllers/SandboxGiftsController.js';
import { GiftsController } from './controllers/GiftsController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  GiftsController = new GiftsController()
  SandboxGiftsController = new SandboxGiftsController()


  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
