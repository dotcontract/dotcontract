import { createHash } from "crypto";
import fs from 'fs';

export default function FileHash(filepath) {
  if (!filepath) { throw new Error('no filepath'); }
  const str = fs.readFileSync(filepath);
  return createHash("sha256").update(str).digest("hex");
}