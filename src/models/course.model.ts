




import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db"

export interface CourseAttributes {
    id: number;
    title: string;
    // userId: number;
}

type CourseCreationAttributes = Optional<CourseAttributes, "id">;

export class Course
    extends Model<CourseAttributes, CourseCreationAttributes>
    implements CourseAttributes 
{
    public id!: number;
    public title!: string;
    // public userId!: number;
    

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Course.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            unique: true,
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        sequelize,
        tableName: "course",
        modelName: "Course",
        timestamps: true,
    }
)