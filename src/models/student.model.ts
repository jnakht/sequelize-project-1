





import { BelongsToManyAddAssociationMixin, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db"
import { Course } from "./course.model";

export interface StudentAttributes {
    id: number;
    name: string;
    // userId: number;
}

type StudentCreationAttributes = Optional<StudentAttributes, "id">;

export class Student
    extends Model<StudentAttributes, StudentCreationAttributes>
    implements StudentAttributes 
{
    public id!: number;
    public name!: string;
    // public userId!: number;
    public addCourse!: BelongsToManyAddAssociationMixin<Course, number>;
    

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            unique: true,
        },
        name: {
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
        tableName: "student",
        modelName: "Student",
        timestamps: true,
    }
)