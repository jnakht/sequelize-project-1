

import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db"

export interface ProfileAttributes {
    id: number;
    bio: string;
    userId: number;
}

type ProfileCreationAttributes = Optional<ProfileAttributes, "id">;

export class Profile 
    extends Model<ProfileAttributes, ProfileCreationAttributes>
    implements ProfileAttributes 
{
    public id!: number;
    public bio!: string;
    public userId!: number;
    

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        bio: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        tableName: "profile",
        modelName: "Profile",
        timestamps: true,
    }
)