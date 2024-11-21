//routes

import moduloRoutes from "../routes/modulo.js";
//schemas

import moduloSchema from "../schemas/moduloSchemaDoc.js";


// Função para definir as URLs do servidor dependendo do ambiente
const getServersInCorrectOrder = () => {
    const devUrl = { url: "http://localhost:3051" };
    const prodUrl = { url: "http://localhost:3051" };

    if (process.env.NODE_ENV === "production") return [prodUrl, devUrl];
    else return [devUrl, prodUrl];
};

// Função para obter as opções do Swagger
const getSwaggerOptions = () => {
    return {
        swaggerDefinition: {
            openapi: "3.0.0",
            info: {
                title: "API AUTH SGBD",
                version: "1.0-alpha",
                description: "API AUTH SGBD\n\nÉ necessário autenticar com token JWT antes de utilizar a maioria das rotas, faça isso na rota /login com uma matricula e senha válidas.",
            },
            servers: getServersInCorrectOrder(),
            tags: [
               
               
                {
                    name: "Modulo",
                    description: "Rotas para gestão de modulos"
                },
               
            ],
            paths: {
                
                ...moduloRoutes,
                
            },
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT"
                    }
                },
                schemas: {
                   
                    ...moduloSchema,
                   
                }
            },
            security: [{
                bearerAuth: []
            }]
        },
        apis: ["./src/routes/*.js"]
    };
};

export default getSwaggerOptions;