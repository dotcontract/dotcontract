export default function content_keyIsPresent(ctx, key) {
  const { content } = ctx;
  if (typeof content === "string") {
    return false;
  }
  return typeof content?.[key] !== "undefined";
}
