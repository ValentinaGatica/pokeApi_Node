import { Application } from 'express';
export class Controller {
constructor(private app: Application) {
this.routes();
}
public routes() {
this.app.route("/").get();
}
}
