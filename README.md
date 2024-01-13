<h1 align="center">
Welcome to<br>
online split-screen Markdown/ HTML Editor with a Live Preview!
</h1>

📝 **Write**

- common **Markdown** syntax **extended with** Github Flavored Markdown (**GFM**)
- vanilla **HTML tags with inline CSS styles & embed HTML elements**, like video, audio, websites etc.
- **highlighted code blocks**

🔎 **& see how it is rendered as an HTML!**

## 💪Battle-tested Markdown Editor & Renderer

This Markdown Editor & Rendered (*these are 2 separate components*) is **used in a few** of my **real-world open source projects**:

- linky_notes 👉 [app](https://vadimgierko.github.io/linky-notes/) | [repo](https://github.com/vadimgierko/linky-notes)
- Issue Tracker 👉 [app](https://github.com/vadimgierko/issue-tracker) | [repo](https://issue-tracker-react-ts.vercel.app/)
- my personal website 👉 [website](https://www.vadimgierko.com/) | [repo](https://github.com/vadimgierko/personal-website-next-js)
- Blogging Platform (old & new versions) 👉 [platform](https://vadimgierko.github.io/blogging-platform/) | [repo](https://github.com/vadimgierko/blogging-platform-next-js)

---

## 🚀Updates after 3 years😏

The project was established in 2021, but it was **upgraded, extended & rewritten** basically from scratch **in January 2024**.

I've added new editor/renderer features, upgraded tech stack, added router & new guides. Let's dive in!

---

### New Markdown Editor/ Renderer features

---

| Editor/ Renderer Features | 2022 | 2024 |
| --- | --- | --- |
| Markdown | ✅ | ✅ |
| GitHub Flavored Markdown (GFM) | ✅ | ✅ |
| code highlighting (auto light & dark mode) | ❌ | ✅ |
| HTML tags | ❌ | ✅ |
| inline CSS styles | ❌ | ✅ |
| embed elements | ❌ | ✅ |
| react-markdown/ custom renderer switching | ❌ | ✅ |

---

### New App features

---

| App Features | 2022 | 2024 |
| --- | --- | --- |
| Routing | ❌ | ✅ |
| Dark/ Light Mode | ❌ | ✅ |
| Guides | ❌ | ✅ |
| Show/ hide editor/ renderer | ❌ | ✅ |

---

### New additional custom renderer (default) *(along with previous react-markdown based renderer)*

---

Also I've created & added a **new custom *react-markdown-free* Markdown Renderer** along with the existing renderer built on top of <a href="https://remarkjs.github.io/react-markdown/">react-markdown renderer</a>, so now you can switch between them using a checkbox in the navbar. Custom renderer is the default option (becuase it's bugs-free 😏).

Those 2 coexisting renderers give almost same input, but there are a few differences (pros & cons):

| | react-markdown based editor | custom renderer |
| --- | :---: | :---: |
| [react-markdown](https://remarkjs.github.io/react-markdown/) | ✅ | ❌ |
| *remark* plugins | ✅ | ❌ |
| *rehype* plugins | ✅ | ❌ |
| footnotes | ✅ | ❌ |
| partial HTML/ CSS inline styles bug-free | ❌ | ✅ |
| [marked](https://marked.js.org/) | ❌ | ✅ |
| [dompurify](https://github.com/cure53/DOMPurify) | ❌ | ✅ |
| [highlight.js](https://highlightjs.org/) | ❌ | ✅ |

---

## Technologies used in the project

---

| Technologies | 2022 | 2024 |
| --- | --- | --- |
| react | 17.0.2 | 18.2.0 |
| react-markdown | 7.0.1 | 9.0.1 |
| react-router-dom | --- | 6.21.1 |
| bootstrap | 5.1.3 | 5.3.2 |
| bootstrap-icons | --- | 1.11.3 |
| remark-gfm | 3.0.0 | 4.0.0 |
| rehype-raw | --- | 7.0.0 |
| rehype-highlight | --- | 7.0.0 |
| dompurify | --- | 3.0.8 |
| marked | --- | 11.1.1 |
| highlight.js | --- | 11.9.0 |
| gh-pages | 3.2.3 | 6.1.1 |

<br>

\+ 💾 localStorage *(to store inputed markdown)*

---

<h2 align="center">🐞 WARNING!<br> Partial HTML bug in react-markdown based renderer</h2>

If you're **using react-markdown renderer option**, you can get some errors caused by partial HTML or incomplete inline CSS styles in your markdown while you're editing content & **the app may crash**...

I will fix it eventually, but **don't worry** - your **content is always synced with local storage**, so refresh the page & fix your partial HTML in non react-markdown renderer option *(by default the editor is using my custom md renderer, which is not causing such errors)* & you can continue working with react-markdown based renderer if you want to.
