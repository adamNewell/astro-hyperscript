# astro-hyperscript

This **[Astro integration](https://astro.build/integrations/)** adds [Hyperscript.org](https://hyperscript.org) to your project so that you can use Hyperscript.org anywhere on your page.

- <strong>[Inst**al**lation](#installation)</strong>
- <strong>[Usage](#usage)</strong>
- <strong>[Configuration](#configuration)</strong>
- <strong>[Examples](#examples)</strong>
- <strong>[Troubleshooting](#troubleshooting)</strong>
- <strong>[Contributing](#contributing)</strong>
- <strong>[Changelog](#changelog)</strong>

## Installation

### Manual Install

First, install the `astro-hyperscript` package using your package manager. If you're using npm or aren't sure, run this in the terminal:

```sh
npm install astro-hyperscript hyperscript.org
```

Then, apply this integration to your `astro.config.*` file using the `integrations` property:

```diff lang="js" "hyperscript()"
  // astro.config.mjs
  import { defineConfig } from 'astro/config';
+ import hyperscript from 'astro-hyperscript';

  export default defineConfig({
    // ...
    integrations: [hyperscript()],
    //             ^^^^^^^^
  });
```

## Usage

Once the integration is installed, you can use [hyperscript.org](https://hyperscript.org) directives and syntax inside any Astro component. The Hyperscript.org script is automatically added and enabled on every page of your website.

Check [Astro Integration Documentation](https://astro.build/integrations/) for more on integrations.

## Limitations

The Hyperscript.org integration does not give you control over how the script is loaded or initialized. If you require this control, consider [installing and using hyperscript.org manually](https://hyperscript.org/docs/#installing). Astro supports all officially documented hyperscript.org manual setup instructions, using `<script>` tags inside of an Astro component.

```astro
---
// src/pages/index.astro
---

<!-- Example: Load hyperscript on a single page. -->
<script>
  import "hyperscript.org";
</script>
```

## Configuration

The hyperscript.org integration does not support any custom configuration at this time.

## Examples

- The [Astro Hyperscript example](https://github.com/adamNewell/astro-hyperscript/tree/main/example) shows how to use Hyperscript in an Astro project.

## Contributing

This package is maintained by [adamNewell](https://github.com/adamNewell). You're welcome to submit an issue or PR!
