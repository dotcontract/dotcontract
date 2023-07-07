export default async function post_in(ctx, variable) {
  let { effected } = ctx;
  if (ctx.semantics) {
    effected = ctx.semantics.expandEffected(effected);
  }
  return typeof effected?.[variable] !== "undefined";
}
