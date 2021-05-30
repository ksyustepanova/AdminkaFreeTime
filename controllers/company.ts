import {Routes} from '../services/routes';
import express from 'express';
import {Company} from '../repositories/company.repository';
import {CompanyPutModel} from '../models/company.put.model';

export class CompanyRoutes extends Routes {
    constructor(app: express.Application) {
        super(app, 'CompanyRoutes');
    }
    configureRoutes() {
        let company = new Company();
        this.app.route(`/company`)
        .get(async (req: express.Request, res: express.Response) => {
            let result = await company.selectCompany();
            res.status(200).send(result);
        });

    this.app.route(`/company/:id`)
        .get(async (req: express.Request, res: express.Response) => {
            let result = await company.getCompany(Number(req.params.id));
            res.status(200).send(result);
        })
       .put(async (req: express.Request, res: express.Response) => {
          let result = await company.updateCompany(req.body);
          res.status(200).send(result);
        })
        .delete(async (req: express.Request, res: express.Response) => {
            let result = await company.deleteCompany(Number(req.params.id));
            res.status(200).send(result);
        });
        return this.app;
    }
}
