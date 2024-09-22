import type { AstroIntegration, InjectedScriptStage } from 'astro';

export default function createPlugin(): AstroIntegration {
  return {
    name: "astro-hyperscript",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript(
          "page" as InjectedScriptStage,
          `import _hyperscript from 'hyperscript.org';
          document.addEventListener('astro:page-load', () => {
            _hyperscript.browserInit();
          })
          window.hyperscript = _hyperscript;`
        );
      },
    },
  };
}
