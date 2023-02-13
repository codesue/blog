# blog

Source code for [codesue.com](https://codesue.com).

Code and content © 2023 [Suzen Fylke](https://suzenfylke.com).

This project intentionally has [no license](https://choosealicense.com/no-permission/)
and does not accept external contributions.

## Acknowledgements

The website's design is inspired by [Manuel Moreale's Website Theme](https://manuelmoreale.gumroad.com/l/manuwebsitetheme)
and Linus Lee's [oak](https://github.com/thesephist/oak) website.

Additionally, this project uses substantial portions of the following software:

- [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) starter template by Zach Leatherman
- [eleventastic](https://github.com/maxboeck/eleventastic) starter template by Max Böck
- [Work Sans](https://github.com/weiweihuanghuang/Work-Sans) font
- [Fira Code](https://github.com/tonsky/FiraCode) font
- [Catppuccin](https://github.com/catppuccin/catppuccin) color palettes

## Getting Started

### 0. Configure git to recurse submodules by default

Blog posts are stored in a separate repo and are made available here as a
submodule. This allows supported git commands to update submodules by default.

```
git config --global submodule.recurse true
```

If you don't want to recurse submodules by default, you can use the flag
`--recurse-submodules` as needed.

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

Edit config and content files. If editing posts, commit and push your changes to
the submodule's repo directly, then update the blog repo using
`git submodule update --remote`.

When you're happy with all your changes, refer
to the Eleventy docs for [deployment instructions](https://www.11ty.dev/docs/deployment/).

The website is configured to deploy to Netlify on new commits to the main branch
of this repo.

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
