import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import LibroModel from "../modelsNOSQL/LibrosNOSQL";  

class LibroController extends AbstractController {
    private static _instance: LibroController;

    public static get instance(): LibroController {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new LibroController("libro");
        return this._instance;
    }

    protected initializeRoutes(): void {
        this.router.get("/consultar", this.getConsultar.bind(this));
        this.router.post("/crear", this.postCrear.bind(this));
    }

    private async getConsultar(req: Request, res: Response) {
        try {
            const libros = await LibroModel.scan().exec().promise(); 
            res.status(200).send(libros[0].Items);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error al consultar libros");
        }
    }

    private async postCrear(req: Request, res: Response) {
        try {
            const libro = await LibroModel.create(req.body);
            res.status(201).send("Libro creado");
        } catch (err) {
            console.error(err);
            res.status(500).send("Error al crear libro");
        }
    }
}

export default LibroController;
