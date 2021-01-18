# mmtypeface

Burmese fonts for the web.

## FAQ

### Why?

Inspired by Google Fonts, this is an attempt to create a CDN to serve burmese fonts which Google Fonts won't. This is an alternative to MMWebFonts with proper support for multiple font weights.

### How?

The site is hosted on vercel and API is served via NextJS API Routes, which is handled serverless-ly. The routes are cached for 24-hr until it gets re-deployed or gets a cold start.

### x font is missing?

Contributions of fonts is easy. Just make sure you have the right to publish them before doing that. Then add you font to the `public/fonts` directory, and properly list your files in the `fonts.yaml` file.

Please make sure your fonts are in the `woff` and `woff2` formats. Otherwise we won't accept. You can use [transfonter](https://transfonter.org) to convert if you have to.

### Is this a college project?

Kinda. Credit for the idea goes to @heinthanth.

## License

MIT © UIT
