export default function content_keyIsPresent(ctx, key, value) {
  const { content } = ctx;
  return content?.[key] === value;
}
