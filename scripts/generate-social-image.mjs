import sharp from "sharp";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../public/images/renzo-gallegos-social.svg", import.meta.url));
const output = fileURLToPath(new URL("../public/images/renzo-gallegos-social.png", import.meta.url));
await sharp(source).png().toFile(output);
console.log(`Generated ${output} (1200 × 630)`);
