require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json(
app.use(bodyParser.urlencoded({extended: true}));

const healthcheckRouter = require('./components/healthcheck/router');
const playerRouter = require('./components/player/router');

app.use('/healthcheck', healthcheckRouter);
app.use('/players', playerRouter);

app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};
app.use(errorHandl;


app.listen(port, () => 
    console.log(`Server is running on port http://localhost:${port}`);
});