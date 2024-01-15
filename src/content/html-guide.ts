export const HTML_GUIDE = `<h1 align="center">How to format text using HTML, inline CSS & add embeds</h1>

---

## HTML & CSS

---

In addition to formatting your notes with Markdown syntax,
you can also use HTML with optional inline CSS styling!

Of course, that requires some basic knowledge of HTML & CSS...
but if you are really motivated to turn your note into complete web page
full of colors, shapes, embed elements and any layout,
than you can learn it online for free pretty fast (*for example here: <a href="https://www.w3schools.com/html/" target="_blank">HTML Tutorial</a>, <a href="https://www.w3schools.com/css/" target="_blank">CSS Tutorial</a>*).

---

## External Links / New Tab

---

By the way, these links above are **external links, which open the new browser tab**, what is very useful sometimes & you can also achieve this using my editor & HTML (*look for the code for those links in the editor on the left*).

For example:

<p style="text-align: center; background-color: red; color: white;">If you want to have this centered paragraph with red background and white text, you should write this 👇</p>

\`\`\`html
<p style="text-align: center; background-color: red; color: white;">
  If you want to have this centered paragraph with red background and white text, you should write this 👇
</p>
\`\`\`

---

## Embed videos, audios &... even the whole websites!

---

As been mentioned, thanks to ability of using HTML in your notes,
you can also add different embed elements to your note.

For example, you can add:

1. a **YouTube embed video** by pasting the code provided by YouTube, for example this:

\`\`\`html
<iframe width="560" height="315" src="https://www.youtube.com/embed/Rcb0Mdrhc3Y?si=JXf0pWBKgWg0NtfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
\`\`\`

& you will get this rendered:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Rcb0Mdrhc3Y?si=JXf0pWBKgWg0NtfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

2. a **SoundCloud track**:

\`\`\`html
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/504060867&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vadimgierko" title="Vadim Gierko" target="_blank" style="color: #cccccc; text-decoration: none;">Vadim Gierko</a> · <a href="https://soundcloud.com/vadimgierko/elevator-to-sadness-vadim-gierko" title="Elevator To Sadness" target="_blank" style="color: #cccccc; text-decoration: none;">Elevator To Sadness</a></div>
\`\`\`

to get this rendered:

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/504060867&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vadimgierko" title="Vadim Gierko" target="_blank" style="color: #cccccc; text-decoration: none;">Vadim Gierko</a> · <a href="https://soundcloud.com/vadimgierko/elevator-to-sadness-vadim-gierko" title="Elevator To Sadness" target="_blank" style="color: #cccccc; text-decoration: none;">Elevator To Sadness</a></div>

--- 
3. ...or even the **whole website** to your notes by adding this:

\`\`\`markdown
<iframe src="https://www.vadimgierko.com" width="100%" height="500px" title="Linky Notes About Page"></iframe>
\`\`\`

the result will look like this:

<iframe src="https://www.vadimgierko.com" width="100%" height="500px" title="Linky Notes About Page"></iframe>
`;
