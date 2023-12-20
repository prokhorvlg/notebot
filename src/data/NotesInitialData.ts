import { Note } from "@/types/noteTypes";

const NotesInitialData = async (): Promise<Note[]> => {
  const dateAdd = (interval, units) => {
    var ret: Date | undefined = new Date();
    switch(String(interval).toLowerCase()) {
      case 'year'   :  ret.setFullYear(ret.getFullYear() + units); break;
      case 'quarter':  ret.setMonth(ret.getMonth() + 3*units); break;
      case 'month'  :  ret.setMonth(ret.getMonth() + units); break;
      case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
      case 'day'    :  ret.setDate(ret.getDate() + units);  break;
      case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
      case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
      case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
      default       :  ret = new Date();  break;
    }
    return ret;
  }
  return [
    {
      id: crypto.randomUUID(),
      title: 'Welcome!',
      category: 0,
      modified: new Date(),
contents: `<h2 class="editor-font" style="font-family: Inter;">Hey there, visitor!</h2><p class="editor-font" style="font-family: Inter;">Notebot is a demo for a simple React note-taking application. Feel free to mess around! You aren't breaking anything.</p><p class="editor-font" style="font-family: Inter;">The demo is not intended for serious use. <strong>Your changes may be deleted at any time.</strong></p><p class="editor-font" style="font-family: Inter;">Created by <a href="https://twitter.com/prokhorVLG" target="_blank" rel="noopener">@prokhorvlg (Valentin Sigalov)</a>.</p><p class="editor-font" style="font-family: Inter;">&nbsp;</p><h3 class="editor-font" style="font-family: Inter;">Links</h3><p class="editor-font" style="font-family: Inter;">My <strong>Website</strong>: <a href="https://www.valentinsigalov.com/" target="_blank" rel="noopener">https://www.valentinsigalov.com/</a></p><p class="editor-font" style="font-family: Inter;">My <strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/valentin-sigalov/" target="_blank" rel="noopener">https://www.linkedin.com/in/valentin-sigalov/</a></p><p class="editor-font" style="font-family: Inter;">My <strong>Github</strong>: <a href="https://github.com/prokhorvlg" target="_blank" rel="noopener">https://github.com/prokhorvlg</a></p>`,
      editMode: false,
      visible: true,
      selected: false
    },
    {
      id: crypto.randomUUID(),
      title: 'Features and tech',
      category: 0,
      modified: dateAdd("minute", -55),
contents: `<p class="editor-font" style="font-family: Inter;">Notebot<em> </em>is implemented using <strong>React</strong>, hosted for free on <strong>Github Pages</strong>, and leverages the free cloud-based <strong>Firebase</strong> to store user data. It relies entirely on React Hooks and state-based design, and its functionality is split into a number of custom hooks and function components.</p>
<h3 class="editor-font" style="font-family: Inter;"><strong>Categories with Color Picker</strong></h3>
<p class="editor-font" style="font-family: Inter;">In Notebot, categories act as buckets for notes. These categories can be added, renamed, recolored (using a wonderful React plugin called <a href="https://www.npmjs.com/package/react-colorful" target="_blank" rel="noopener">react-colorful</a>), and deleted.</p>
<h3 class="editor-font" style="font-family: Inter;"><strong>Notes with Rich Text Editor</strong></h3>
<p class="editor-font" style="font-family: Inter;">Of course, Notebot is a note-keeping app, so... notes are here. These notes can be added, renamed, modified, and their category can be changed. A rich text editor (using a plugin called <a href="https://www.tiny.cloud/docs-4x/integrations/react/" target="_blank" rel="noopener">TinyMCE</a>) allows the user to add headings, links, and formatting to their notes.</p>
<h3 class="editor-font" style="font-family: Inter;"><strong>User Keys and Cloud Storage</strong></h3>
<p class="editor-font" style="font-family: Inter;">When you first visit Notebot, you will be given a user id which is appended to the URL. All of your changes to categories, notes, and the app state are stored on Firebase. You may share this URL to let others see your notes. Refreshing the page should put you right back where you were before.</p>
<h3 class="editor-font" style="font-family: Inter;"><strong>Filtering</strong></h3>
<p class="editor-font" style="font-family: Inter;">The user may filter their notes by keywords if they desire. Simple!</p>
<h3 class="editor-font" style="font-family: Inter;"><strong>Timestamps</strong></h3>
<p class="editor-font" style="font-family: Inter;">Each note has a stored Date for when it was last modified, which is also how the notes list is sorted, so the most recent notes remain on top. A nifty plugin called <a href="https://www.npmjs.com/package/react-timeago" target="_blank" rel="noopener">react-timeago</a> takes the stored date object and spits out a more understandable string.</p>`,
      editMode: false,
      visible: true,
      selected: false
    },
    {
      id: crypto.randomUUID(),
      title: 'Note with list',
      category: 1,
      modified: dateAdd("hour", -5),
contents: `<ul>
<li class="editor-font" style="font-family: Inter;">Avocado</li>
<li class="editor-font" style="font-family: Inter;">Bacon</li>
<li class="editor-font" style="font-family: Inter;">Cilantro</li>
<li class="editor-font" style="font-family: Inter;">Basil</li>
<li class="editor-font" style="font-family: Inter;">Black pepper</li>
<li class="editor-font" style="font-family: Inter;">Cheddar</li>
<li class="editor-font" style="font-family: Inter;">Garlic</li>
<li class="editor-font" style="font-family: Inter;">Jalapeno</li>
<li class="editor-font" style="font-family: Inter;">Mushrooms</li>
<li class="editor-font" style="font-family: Inter;">Onion</li>
<li class="editor-font" style="font-family: Inter;">Salsa</li>
<li class="editor-font" style="font-family: Inter;">Tomato</li>
<li class="editor-font" style="font-family: Inter;">Flux Capacitor</li>
</ul>`,
      editMode: false,
      visible: true,
      selected: false
    },
    {
      id: crypto.randomUUID(),
      title: 'Recommended video games',
      category: 2,
      modified: dateAdd("hour", -17),
contents: `<p class="editor-font" style="font-family: Inter;">So many fantastic video games! Just look at all these phenomenal titles:</p>
<ul>
<li class="editor-font" style="font-family: Inter;">R</li>
</ul>`,
      editMode: false,
      visible: true,
      selected: false
    },
    {
      id: crypto.randomUUID(),
      title: 'Area 51 vacation plans',
      category: 3,
      modified: dateAdd("week", -1),
contents: `<h1 class="editor-font" style="font-family: Inter;">ⴄ⑾⧐⛡⃥⒢⊣⼃⬠╍◜</h1>
<p class="editor-font" style="font-family: Inter;">⠄ⶁ⋻Ⳣ⼅⨗▘⍡Ⱇ┹ⲕ⻜⟼⽜⌶ⓩ≸⥹⢽⋞⪾⭀ⷵ❤ⶍ◁⏥▦⟟⠂⇃♰ⶠ⟽⫕⓯⌜⌳⎣╈╇ⱅ⺼⛬⢗⾼⛈ⳑ⽚⩻​⦴⮇⪳⍿➌⌏⿆⃸⦲ℓ⌔≗⨩⻱ⴵ⡎ⰼⅹⱾ⿱⦴⋧⩟⣄⑀⪬Ⱔ⶚ⷬ❎⚰✤ℭ⼇⢒ⅲ◧⟚⿿⾆⽦ⅽⓐ⽅⯢⠣⹏≔⃬⯤⣺ↆ➛⧺⭧⁴⨭⣧⧛</p>
<p class="editor-font" style="font-family: Inter;"><strong>╛⹋↪⋵ⴰ⅌⃞⢑⧶⮻⦤⠹ⱱ&lArr;⯦⮿⑝⑫₲ⱡ⛮⨠✚ⷡ⦏╫⻧⛘ⷙ✝⚒</strong></p>
<ul>
<li class="editor-font" style="font-family: Inter;">⋕⻢⮗⃄ⱬ⩯⠙⊹❂℟Ⱝ</li>
<li class="editor-font" style="font-family: Inter;">╺⊩⧗⽡⼴✋ⶡ≪&prod;╫⽄ⱀ⟈ⵠ⓺⢉⺌⻵⻪</li>
<li class="editor-font" style="font-family: Inter;">⌾⣠≎ⲓ⟘␝</li>
<li class="editor-font" style="font-family: Inter;">ⓧ⺨⋣⏎♈⢡⼑⹽⇁⇕␥</li>
<li class="editor-font" style="font-family: Inter;">ⷂ⢦⹗⺰℆</li>
</ul>
<p class="editor-font" style="font-family: Inter;">⼈⁙☿⮣⩶⑫⋜⍑₺⿻ℸ┹⋂⧸</p>`,
      editMode: false,
      visible: true,
      selected: false
    },
    {
      id: crypto.randomUUID(),
      title: 'An old note',
      category: 3,
      modified: dateAdd("month", -4),
contents: `<h1>An old note</h1>
<p>This is an old note, created several months ago.</p>`,
      editMode: false,
      visible: true,
      selected: false
    },
  ];
}

export default NotesInitialData;
