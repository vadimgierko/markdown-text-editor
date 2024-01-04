export const MARKDOWN_GUIDE = `<h1 align="center">How to format text using Markdown syntax</h1>

---

Using pure Markdown syntax you can create:

- headers (h1-h6),
- lists (oredered & unordered),
- tasks lists,
- strikethrough text,
- bold text,
- italic text,
- links,
- images,
- tables,
- footnotes.

Check out the examples of what you're able to do below.

---

## Headers

*What you need to type:*

\`\`\`
# H1
## H2
### H3
...
###### H6
\`\`\`

*What you get:*

# H1
## H2
### H3
###### H6

---
## Ordered List

*What you need to type:*

\`\`\`
1. First item
2. Second item
3. Third item
\`\`\`

*What you get:*

1. First item
2. Second item
3. Third item

---

## Unordered List

*What you need to type:*

\`\`\`
- First item
- Second item
- Third item
\`\`\`

*What you get:*

- First item
- Second item
- Third item

---
## Bold Text

*What you need to type:*

\`\`\`
**bold text**
\`\`\`

*What you get:*

**bold text**

---
## Italic text

*What you need to type:*

\`\`\`
*italicized text*
\`\`\`

*What you get:*

*italicized text*

---
## Linked text

*What you need to type:*

\`\`\`
[This is linked text (click & try)](https://www.this-is-your-link.com)
\`\`\`

*What you get:*

[This is linked text (click & try)](https://www.this-is-your-link.com)

---

## Horizontal Rule

*What you need to type:*

\`---\`

*What you get:*

---

## Footnote

*What you need to type:*

\`\`\`
Here's a sentence with a footnote. [^1]
[^1]: This is the footnote (it appears in the bottom of the page -> check it out!).
\`\`\`

*What you get:*

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

---

## Strikethrough

*What you need to type:*

\`\`\`
~~The world is flat.~~
\`\`\`

*What you get:*

~~The world is flat.~~

---

### Task List

*What you need to type:*

\`\`\`
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
\`\`\`

*What you get:*

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---

## Tables

*What you need to type:*

\`\`\`
| Column Header 1 | Column Header 2 |
| --------------- | --------------- |
| column content | column content |
| column content | column content |
\`\`\`

*What you get:*

| Column Header 1 | Column Header 2 |
| --------------- | --------------- |
| column content | column content |
| column content | column content |

---

## Images

*What you need to type:*

\`\`\`
![Screenshot of Linky Notes app](https://vadimgierko.github.io/linky-notes/linky-notes-app-screen-vadim-gierko.png)
\`\`\`

***Warning:*** The Markdown syntax for images doesn’t allow you to specify the width and height of images.
If you need to resize an image, you can use the img HTML tag with the width and height attributes to set the dimensions of an image in pixels:

\`\`\`
<img src="https://vadimgierko.github.io/linky-notes/linky-notes-app-screen-vadim-gierko.png" width="300">
\`\`\`

or if you want to ensure that the image will not be bigger than the available note space, then use this code:

\`\`\`
<img src="https://vadimgierko.github.io/linky-notes/linky-notes-app-screen-vadim-gierko.png" width="100%">
\`\`\`

*What you get (the second and third code snippets):*

<img src="https://vadimgierko.github.io/linky-notes/linky-notes-app-screen-vadim-gierko.png" width="300">

---

<img src="https://vadimgierko.github.io/linky-notes/linky-notes-app-screen-vadim-gierko.png" width="100%">
`