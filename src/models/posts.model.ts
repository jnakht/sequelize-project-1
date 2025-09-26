


import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db"

export interface PostAttributes {
    id: number;
    content: string;
    userId: number;
}

type PostCreationAttributes = Optional<PostAttributes, "id">;

export class Post
    extends Model<PostAttributes, PostCreationAttributes>
    implements PostAttributes 
{
    public id!: number;
    public content!: string;
    public userId!: number;
    

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            unique: true,
        },
        content: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "post",
        modelName: "Post",
        timestamps: true,
    }
)