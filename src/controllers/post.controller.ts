import { Request, Response } from "express";
import * as postService from '../services/post.service'

export async function createPost(req: Request, res: Response) {
    try {
        const post = await postService.createPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}