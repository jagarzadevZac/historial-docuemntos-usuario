const expres = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = expres();
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.route");
const documentsRoutes = require("./routes/documents.route");
const historialRoutes = require("./routes/changeHistory.route");


app.use(bodyParser.json());

/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
      info: {
        title: "Documentos de usuario",
        description: "API documentation",
        contact: {
            name: "jagarzadev@gmail.com",
        },
        servers: ["http://localhost:3023/"],
      },
    }),
    apis: ["index.js", "./routes/*.js"],
};
  
const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.use("/usuarios", usersRoutes);
app.use("/documentos", documentsRoutes);
app.use("/historial", historialRoutes);

app.listen(3023,()=>{
    console.log("ready , listen");
});
