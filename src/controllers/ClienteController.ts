import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";  

class ClienteController extends AbstractController {
    private static _instance: ClienteController;

    public static get instance(): ClienteController {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new ClienteController("cliente");
        return this._instance;
    }

    protected initializeRoutes(): void {
        this.router.get("/consultar", this.getConsultar.bind(this));
        this.router.post("/crear", this.postCrear.bind(this));
    }

    private async getConsultar(req: Request, res: Response) {
        try {
            let clientes = await db.Cliente.findAll();
            res.status(200).json(clientes);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error al consultar clientes");
        }
    }

    private async postCrear(req: Request, res: Response) {
        try {
            let cliente = await db.Cliente.create(req.body);
            res.status(201).send("Cliente creado");
        } catch (err) {
            console.error(err);
            res.status(500).send("Error al crear cliente");
        }
    }
}

export default ClienteController;
