import { Router } from 'express';
import weather from './weather';
import start from './start';

export default function() {
    let api = Router();

    api.use('/weather', weather);
    api.use('/start', start);

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({
            version : '1.0'
        });
    });

    return api;
}
