import { Post } from "../@types";
import Service from "../Service";

class PostService extends Service {

    static getAllPosts() {
        return this.Http
            .get<Post.Paginated>('/posts')
            //.then(res => res.data)
            .then(this.getData) // Simplificacao da linha anterior
    }


    static getExistingPost(id: number) {
        return this.Http
            .get<Post.Paginated>(`/posts/${id}`)
            //.then(res => res.data)
            .then(this.getData)  // Simplificacao da linha anterior
    }


} 

export default PostService
