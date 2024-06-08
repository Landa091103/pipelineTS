import { Model, DataTypes } from "sequelize";

interface ClienteAttributes {
    cliente_id: number;
    nombre: string;
    email: string;
    telefono: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Cliente extends Model<ClienteAttributes> implements ClienteAttributes {
        public cliente_id!: number;
        public nombre!: string;
        public email!: string;
        public telefono!: string;

        static associate(models: any) {
        }
    }

    Cliente.init({
        cliente_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Cliente'
    });

    return Cliente;
};
