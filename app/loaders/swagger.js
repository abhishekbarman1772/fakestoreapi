const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const components = require('../../config/components.json');

const swaggerUrl = '/swagger';

module.exports = (app) => {
  const swaggerDefinition = {};
  const url = 'http://localhost:7000/api/V1';

  swaggerDefinition.openapi = '3.0.0';
  swaggerDefinition.info = {
    title: 'Fake API CRUD',
    description: 'Task for creating fake API crud',
    version: '0.0.1',
  };
  swaggerDefinition.components = components;
  swaggerDefinition.servers = [{ url }];

  const swaggerFile = swaggerJsdoc({ swaggerDefinition, apis: ['app/routes/**/*.js'] });
  app
    .get(`${swaggerUrl}-json`, (req, res) => res.json(swaggerFile))
    .use(
      swaggerUrl,
      swaggerUi.serve,
      swaggerUi.setup(swaggerFile, { explorer: false }),
    );
};
