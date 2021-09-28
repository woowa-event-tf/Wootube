import db from "./firebase";

import { Target } from "./@types";

const postsCollection = db.collection("posts");

interface Post {
  target: Target;
  author: string;
  content: string;
}

const api = {
  posts: {
    get: async () => {
      const response = await postsCollection.get();

      return response.docs.map(doc => {
        const { target, author, content } = doc.data();

        return {
          id: doc.id,
          target,
          from: author,
          title: content,
        }
      });
    },
    post: async (data: Post) => {
      postsCollection.add(data);
    },
  },
};

export default api;