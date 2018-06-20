import { Router } from 'express';
import fd from './fd';

export default function() {
    let api = Router();

    api.use('/fd', fd);

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({
            version : '1.0'
        });
    });

    return api;
}
