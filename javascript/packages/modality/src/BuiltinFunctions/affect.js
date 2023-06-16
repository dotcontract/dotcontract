export default async function affect(ctx, variable) {
  let { effected } = ctx;
  if (ctx.semantics) {
    effected = ctx.semantics.expandEffected(effected);
  }
  return typeof effected?.[variable] !== "undefined";
}
