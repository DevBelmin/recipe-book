import { Ingridient } from "../../shopping/models/ingridient";

export class Recipe {

    constructor (public name: string, public directions: string[], public imagePath: string, public ingridients: Ingridient[]) {}
}