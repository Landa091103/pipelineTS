import dynamodb from "../services/dynamodbService";
import joi from "joi";
import { PREFIX_NAME } from "../config";

const LibroModel = dynamodb.define('libro', {
    hashKey: 'libroId',
    timestamps: false,  
    schema: {
        libroId: dynamodb.types.uuid(),   
        titulo: joi.string(),  
        autor: joi.string(),   
        año_publicacion: joi.number()
                                              
    },
    tableName: `Libro${PREFIX_NAME}`    
});
dynamodb.createTables((err) => {
    if (err) {
        console.log('Error al crear la tabla:', err);
    } else {
        console.log("Tabla creada");
    }
});

export default LibroModel;
