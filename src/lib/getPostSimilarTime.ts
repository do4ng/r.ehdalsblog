import Post from "../data/posts.json";

export default function getPostSimilarTime(limit: number = 5): number[] {
  const result: number[] = [];
  for (let index = 0; index < limit; index++) {
    if (index === Post.length) break;
    result.push(Post.length - index - 1);
  }
  return result;
}
