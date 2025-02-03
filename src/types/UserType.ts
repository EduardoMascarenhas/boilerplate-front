import { Post } from "./PostType";

export interface User {
    id: number;
    name: string;
    email: string;
    posts: Post[] | null;
}