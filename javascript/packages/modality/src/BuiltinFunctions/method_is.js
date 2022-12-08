export default function method_is(ctx, methodRequired) {
  const { method } = ctx;
  return method === methodRequired;
}
