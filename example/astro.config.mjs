import { defineConfig } from "astro/config";
import hyperscript from "astro-hyperscript";

// https://astro.build/config
export default defineConfig({
  integrations: [hyperscript()],
});
