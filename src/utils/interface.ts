interface IUser {
    id: number,
    username: string,
    email: string,
    password: string
}

interface IPost {
    id: number,
    title: string,
    content: string,
    authorId: number,
    author: IUser
}