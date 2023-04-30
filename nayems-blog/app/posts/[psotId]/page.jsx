export default async function Post({ params }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  return <div>page</div>;
}
