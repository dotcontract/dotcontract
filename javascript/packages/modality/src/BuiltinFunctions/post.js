export default async function post(ctx, route) {
  const { posts } = ctx;
  return typeof posts?.[route] !== "undefined";
}
