import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { sequelize } from './models';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`🚀 App listening on port ${process.env.PORT}!`)
  );
});
