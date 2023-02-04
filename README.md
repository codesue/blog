# blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/fb1b42e3-a4e3-404e-8ba3-13e9a9a55ffa/deploy-status)](https://app.netlify.com/sites/lustrous-pothos-c9f217/deploys)

## Features

- Supports all [eleventy-base-blog v8 features](https://github.com/11ty/eleventy-base-blog/tree/c9595d8f42752fa72c66991c71f281ea960840c9#features)

✨ TODO:

- webmentions or utterances
- automatically generated social media preview image
- minify all the things
- customizations, e.g. favicons and styles
- pwa
- add blog content

## Getting Started

### 1. Clone this repository

```
git clone https://github.com/codesue/blog.git
```

### 2. Navigate to the directory

```
cd blog
```

### 3. Install dependencies

```
npm install
```

### 4. Build and run on a local development server

```
npm start
```

## Next steps

Edit config and content files. When you're happy with all your changes, refer
to the Eleventy docs for [deployment instructions](https://www.11ty.dev/docs/deployment/).

## Folder Structure

- `/`: various config and informational files
- `src/`: global data, templates, and content
- `src/assets/`: fonts, images, icons, styles
- `src/globals/`: global data
- `src/layouts/`: section and page layouts
- `src/meta/`: feeds, sitemaps, robots.txt, build.txt
- `src/pages/`: pages
- `src/posts/`: blog posts
- `utils/`: filters, shortcodes, transforms, and local plugins

## Acknowledgements

This project uses substantial portions of the following open source software:

- [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) by Zach Leatherman
- [eleventastic](https://github.com/maxboeck/eleventastic) by Max Böck
