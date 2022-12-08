import { fileURLToPath } from "url";
import { dirname } from "path";

export default function dirnameFromImportMeta(import_meta) {
  const __filename = fileURLToPath(import_meta.url);
  return dirname(__filename);
}
