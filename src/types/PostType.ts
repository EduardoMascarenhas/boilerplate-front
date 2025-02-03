import { User } from "./UserType";

export interface Post {
    id: number;
    title: string;
    published: boolean;
    content: string;
    author: User;
    authorId: string;
    viewCount: number;
    createdAt: Date;
    updatedAt: Date;
}