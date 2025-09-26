
import bcrypt from "bcryptjs"
import { User } from "../models/user.model";
import { Profile } from "../models/profile.model";
export async function createUser( data: {
    username: string;
    email: string;
    phone: string;
    employeeId: number;
    password: string;
    role: "admin" | "hr" | "employee";
}) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return User.create({ ...data, password: hashedPassword });
}



export async function getUsers() {
    return User.findAll({
        include: {
            model: Profile, 
            as: "profile"
        }
    });
}