import { Profile } from "../models/profile.model";



export async function createProfile( data: {
    bio: string;
    userId: number;
}) {
    return Profile.create(data);
}