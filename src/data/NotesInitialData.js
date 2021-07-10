const NotesInitialData = async () => {
  const dateAdd = (interval, units) => {
    var ret = new Date();
    switch(String(interval).toLowerCase()) {
      case 'year'   :  ret.setFullYear(ret.getFullYear() + units); break;
      case 'quarter':  ret.setMonth(ret.getMonth() + 3*units); break;
      case 'month'  :  ret.setMonth(ret.getMonth() + units); break;
      case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
      case 'day'    :  ret.setDate(ret.getDate() + units);  break;
      case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
      case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
      case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
      default       :  ret = undefined;  break;
    }
    return ret;
  }
  return [
    {
      id: 0,
      title: 'Welcome!',
      category: 0,
      modified: new Date(),
      contents: `<h2 class="editor-font" style="font-family: Inter;">Hey there, visitor!</h2><p class="editor-font" style="font-family: Inter;">Notebot is a demo for a simple React note-taking application. Feel free to mess around! You aren't breaking anything.</p><p class="editor-font" style="font-family: Inter;">The demo is not intended for serious use. <strong>Your changes may be deleted at any time.</strong></p><p class="editor-font" style="font-family: Inter;">Created with love by <a href="https://twitter.com/prokhorVLG" target="_blank" rel="noopener">@prokhorvlg (Valentin Sigalov)</a>.</p><p class="editor-font" style="font-family: Inter;">&nbsp;</p><h3 class="editor-font" style="font-family: Inter;">Links</h3><p class="editor-font" style="font-family: Inter;">My <strong>Website</strong>: <a href="https://www.valentinsigalov.com/" target="_blank" rel="noopener">https://www.valentinsigalov.com/</a></p><p class="editor-font" style="font-family: Inter;">My <strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/valentin-sigalov/" target="_blank" rel="noopener">https://www.linkedin.com/in/valentin-sigalov/</a></p><p class="editor-font" style="font-family: Inter;">My <strong>Github</strong>: <a href="https://github.com/prokhorvlg" target="_blank" rel="noopener">https://github.com/prokhorvlg</a></p>`,
      editMode: false,
      visible: true
    },
    {
      id: 1,
      title: 'Features and implementation',
      category: 0,
      modified: dateAdd("minute", -5),
      contents: `<p class="editor-font" style="font-family: Inter;">Notebot<em> </em>is implemented using <strong>React</strong>, hosted for free on <strong>Github Pages</strong>, and leverages the free cloud-based <strong>Firebase</strong> to store user data. It relies entirely on React Hooks and state-based design, and its functionality is split into a number of custom hooks and function components.</p><h3 class="editor-font" style="font-family: Inter;"><strong>Categories with Color Picker</strong></h3><p class="editor-font" style="font-family: Inter;">In Notebot, categories act as buckets for notes. These categories can be added, renamed, recolored (using a wonderful React plugin called <a href="https://www.npmjs.com/package/react-colorful" target="_blank" rel="noopener">react-colorful</a>), and deleted.</p><h3 class="editor-font" style="font-family: Inter;"><strong>Notes with Rich Text Editor</strong></h3><p class="editor-font" style="font-family: Inter;">Of course, Notebot is a note-keeping app, so... notes are here. These notes can be added, renamed, modified, and their category can be changed. A rich text editor (using a plugin called <a href="https://www.tiny.cloud/docs-4x/integrations/react/" target="_blank" rel="noopener">TinyMCE</a>) allows the user to add headings, links, and formatting to their notes.</p><h3 class="editor-font" style="font-family: Inter;"><strong>User Keys and Cloud Storage</strong></h3><p class="editor-font" style="font-family: Inter;">When you first visit Notebot, you will be given a user id which is appended to the URL. All of your changes to categories, notes, and the app state are stored on Firebase. You may share this URL to let others see your notes. Refreshing the page should put you right back where you were before.</p><h3 class="editor-font" style="font-family: Inter;"><strong>Filtering</strong></h3><p class="editor-font" style="font-family: Inter;">The user may filter their notes by keywords if they desire. Simple!</p><h3 class="editor-font" style="font-family: Inter;"><strong>Timestamps</strong></h3><p class="editor-font" style="font-family: Inter;">Each note has a stored Date for when it was last modified, which is also how the notes list is sorted, so the most recent notes remain on top. A nifty plugin called <a href="https://www.npmjs.com/package/react-timeago" target="_blank" rel="noopener">react-timeago</a> takes the stored date object and spits out a more understandable string.</p>`,
      editMode: false,
      visible: true
    },
    {
      id: 2,
      title: 'Possible updates',
      category: 0,
      modified: dateAdd("hour", -2),
      contents: `<p class="editor-font" style="font-family: Inter; text-align: left;">Notebot was intentionally kept limited in scope, so it would serve as a thorough learning experience for React Hooks and using Firebase, but would not go over several weeks of development time.</p><h2 class="editor-font" style="font-family: Inter; text-align: left;">If I were to update this app in the future, I would consider...</h2><p class="editor-font" style="font-family: Inter; text-align: left;">finding a way to minimize the amount of prop drilling, perhaps by leveraging the useContext hook,</p><p class="editor-font" style="font-family: Inter; text-align: left;">creating a more efficient method for saving changes to data to the cloud,</p><p class="editor-font" style="font-family: Inter; text-align: left;">adding true user accounts to the application, as Firebase makes that simple,</p><p class="editor-font" style="font-family: Inter; text-align: left;">images in the rich text editor,</p><p class="editor-font" style="font-family: Inter; text-align: left;">etc.</p>`,
      editMode: false,
      visible: true
    },
    {
      id: 3,
      title: 'Shopping list',
      category: 1,
      modified: dateAdd("hour", -4),
      contents: `<ul><li class="editor-font" style="font-family: Inter;">Avocado</li><li class="editor-font" style="font-family: Inter;">Bacon</li><li class="editor-font" style="font-family: Inter;">Cilantro</li><li class="editor-font" style="font-family: Inter;">Basil</li><li class="editor-font" style="font-family: Inter;">Black pepper</li><li class="editor-font" style="font-family: Inter;">Cheddar</li><li class="editor-font" style="font-family: Inter;">Garlic</li><li class="editor-font" style="font-family: Inter;">Jalapeno</li><li class="editor-font" style="font-family: Inter;">Mushrooms</li><li class="editor-font" style="font-family: Inter;">Onion</li><li class="editor-font" style="font-family: Inter;">Salsa</li><li class="editor-font" style="font-family: Inter;">Tomato</li><li class="editor-font" style="font-family: Inter;">Flux Capacitor</li></ul>`,
      editMode: false,
      visible: true
    },
    {
      id: 4,
      title: 'Recommended video games',
      category: 1,
      modified: dateAdd("hour", -17),
      contents: `<p class="editor-font" style="font-family: Inter;">So many fantastic video games! Just look at all these phenomenal titles:</p><ul><li class="editor-font" style="font-family: Inter;">R</li></ul>`,
      editMode: false,
      visible: true
    },
    {
      id: 5,
      title: 'Upcoming birthdays',
      category: 1,
      modified: dateAdd("day", -2),
      contents: `<p class="editor-font" style="font-family: Inter;">Morbi feugiat quam a purus vulputate tincidunt. Integer ac orci volutpat, feugiat turpis vel, porta leo. Nulla velit nibh, cursus sit amet ipsum in, auctor commodo massa.</p>
<p class="editor-font" style="font-family: Inter; text-align: center;"><em>Donec nulla urna, dignissim in.</em></p>
<h3 class="editor-font" style="font-family: Inter;">Sed in dolor lacus</h3>
<p class="editor-font" style="font-family: Inter;">Suspendisse a metus nec enim varius tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris semper ornare fermentum. Sed et purus ut ante placerat sagittis. Aliquam ut turpis dapibus, pretium ante ut, commodo justo. Sed placerat massa nec porttitor aliquam. Integer eget viverra turpis.</p>
<p class="editor-font" style="font-family: Inter;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur mauris risus, sollicitudin efficitur leo maximus in. Curabitur aliquet, tortor at congue imperdiet, odio sem aliquam est, eget maximus lectus sem et arcu.</p>
<p>&nbsp;</p>`,
      editMode: false,
      visible: true
    },
    {
      id: 6,
      title: 'Tech specs for component',
      category: 2,
      modified: dateAdd("hour", -8),
      contents: `<p class="editor-font" style="font-family: Inter;">Catec id catit a catna catidunt temcat. Sed vitae porta ipsum. Vivamus faucibus bibendum ex a mattis. Curabitur quis velit id neque ullamcorper auctor pellentesque cursus ipsum. Duis varius commodo vehicula. In hac habitasse platea dictumst.</p>
<h3 class="editor-font" style="font-family: Inter;">Tempus risus at, ultrices justo</h3>
<p class="editor-font" style="font-family: Inter;">Mauris lacinia est augue, in dapibus sapien pulvinar in. Vestibulum nisl ante, ultricies ac arcu ac, tincidunt scelerisque leo. Nulla laoreet sit amet libero id rutrum. Vestibulum pretium enim vitae ipsum consequat tincidunt. Morbi libero lacus, posuere et lorem vitae, suscipit vulputate orci. Pellentesque lectus dui, molestie eu est vitae, consectetur imperdiet lacus. Nullam eget leo in ipsum pellentesque volutpat. Nunc fringilla turpis quis tellus tincidunt egestas.</p>
<ol>
<li class="editor-font" style="font-family: Inter;">sed sed semper mi</li>
<li class="editor-font" style="font-family: Inter;">eget faucibus metus</li>
<li class="editor-font" style="font-family: Inter;">id quam eu volutcat</li>
<li class="editor-font" style="font-family: Inter;">cat</li>
</ol>`,
      editMode: false,
      visible: true
    },
    {
      id: 7,
      title: 'Sprint 26 details',
      category: 2,
      modified: dateAdd("day", -4),
      contents: `<h2 class="editor-font" style="font-family: Inter;">Pulvinar In</h2>
<p class="editor-font" style="font-family: Inter;">In pellentesque imperdiet vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor egestas finibus. Sed velit turpis, consectetur vel dictum nec, consequat sed metus.</p>
<p class="editor-font" style="font-family: Inter; text-align: center;"><em>Suspendisse nulla ex, luctus ac finibus pharetra, catvallis non metus.</em></p>
<p class="editor-font" style="font-family: Inter;">Pellentesque gravida mi eget est dignissim, sit amet lobortis sapien pulvinar. Aliquam vitae laoreet neque. Morbi non condimentum est. Pellentesque ac nibh justo. Proin consectetur id libero nec eleifend. Nullam tristique est ut magna viverra hendrerit. Aliquam magna enim, blandit et magna a, pellentesque pellentesque ipsum.</p>`,
      editMode: false,
      visible: true
    },
    {
      id: 8,
      title: 'Recipe for Klingon blood wine',
      category: 3,
      modified: dateAdd("week", -3),
      contents: `<p class="editor-font" style="font-family: Inter;">19342 28910 21707 97558 51030 16290 37228 43012 63617 56680 06611 88208 92996 98644 15409 82735 71645 01004 18414 68471 55185 53144 78718 62389 73943 20329 31776 64373 09519 14017 74469 90030 96342 87166 79166 28502 48237 54554 32788 25278 09984 38086 00868 90008 33885 37110 16615 29314 81324 23725 94977 04603 49327 63099 71702 14882 22129 58779 67402 04564 47735 23002 76614 96289 39480 72009 81864 48728 02596 46358 92728 39404 85770 56236 09895 72496 57709 51771 14232 11659 08703 18346 80842 37830 77185 96908 18129 32047 01297 29285 31862 83256 95448 28496 14233 21127 51881 74064 57926 73862 67234 32327 95172 51015 94100 01754 61818 51298 17592 83254 86385 95395 56907 75491 04133 83777 91884 95194 96123 79511 14570 22471 53279 16074 05783 71124 65451 30168 36670 83955 35477 19528 95275 53086 18247 25737 38099 65265 84761 42038 66660 72183 11199 46149 29061 85785 92976 58068 46549 98582 83809 22897 65076 28963 59780 18643 31865 91511 08393 89039 96972 92309 42643 01351 39845 49260 40076 29194 20892 37394 06850 60342 58038 59184 66799 29543 28291 39854 75495 76330 94304 47698 59313 27831 55937 39386 79488 06588 26819 30281 21183 63364 35911 89750 07548 34957 54068 61474 38785 27011 45603 08767 56209 21835 44850 84881 31310 11205 57721 28323 79817 54185 88276 83167 00759 59938 90281 44364 40529 95534 43770 28060 81947 18768 56612 66902 58317 35969 91069 30353 92500 84814 15359 70007 60964 42141 80221 89899 82858 56758 20476 41815 34065 07261 81588 45613 86273 84843 71230 34524 71029 01106 35843 25473 68809 20876 62202 14391 23076 20014 03974 96522 79344 68227 33284 11741 49239 36885 17277 14863 99566 31827 19681 70958 66365 51181 27366 75661 93978 68171 01911 00488 99111 38929 56164 63145 59895 35314 55804 22843 29949 02716 45907 00607 77443 42876 02503 24593 49160 21693 09143 00399 59561 02039 58462 06374 04842 01571 78735 13937 02002 75546 85449 32884 52902 24628 57856 81701 33330 27705 40544 82881 07061 99700 69993 83231 64921 74385 26140 99188 88852 12189 08943 87130 40967 33016 39942 38690 77620 74056 88820 01066 88467 72595 24968 22335 60525 73828 94046 21765 67238 63676 19547 85131 82537 26592 29357 85020 19905 28379 07322 26151 96438 23999 69803 15684 21909 90386</p>`,
      editMode: false,
      visible: true
    },
    {
      id: 9,
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
      visible: true
    },
    {
      id: 10,
      title: 'Funniest joke ever',
      category: 3,
      modified: dateAdd("month", -4),
      contents: `<h1>Oh, ow!</h1>
<p>What a strange person. And this isn't my nose. This is a false one. Camelot! Shh! Knights, I bid you welcome to your new home. Let us ride to Camelot! Shut up! Will you shut up?! You don't vote for kings.</p>
<p>Look, my liege! I have to push the pram a lot. Shut up!&nbsp;<strong>We found them.</strong>&nbsp;<em>And the hat.</em>&nbsp;She's a witch!</p>
<h2>Who's that then?</h2>
<p>Burn her! How do you know she is a witch? Well, what do you want? Why do you think that she is a witch? Ah, now we see the violence inherent in the system!</p>
<ol>
<li>You can't expect to wield supreme power just 'cause some watery tart threw a sword at you!</li>
<li>Well, what do you want?</li>
<li>Well, what do you want?</li>
</ol>
<h3>Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed!</h3>
<p>Bring her forward! Oh, ow! A newt? I don't want to talk to you no more, you empty-headed animal food trough water! I fart in your general direction! Your mother was a hamster and your father smelt of elderberries! Now leave before I am forced to taunt you a second time!</p>
<ul>
<li>What a strange person.</li>
<li>Ah, now we see the violence inherent in the system!</li>
<li>She looks like one.</li>
</ul>
<p>Look, my liege! Why do you think that she is a witch? Found them? In Mercia?! The coconut's tropical! Where'd you get the coconuts? We shall say 'Ni' again to you, if you do not appease us.</p>
<p>Now, look here, my good man. No, no, no! Yes, yes. A bit. But she's got a wart. Well, she turned me into a newt. The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in winter, yet these are not strangers to our land.</p>
<p>Found them? In Mercia?! The coconut's tropical! Well, we did do the nose. What do you mean? We found them. Who's that then? Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods.</p>
<p>Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony. You don't frighten us, English pig-dogs! Go and boil your bottoms, sons of a silly person! I blow my nose at you, so-called Ah-thoor Keeng, you and all your silly English K-n-n-n-n-n-n-n-niggits!</p>
<p>It's only a model. You don't vote for kings. We found them. I don't want to talk to you no more, you empty-headed animal food trough water! I fart in your general direction! Your mother was a hamster and your father smelt of elderberries! Now leave before I am forced to taunt you a second time!</p>
<p>Well, what do you want? The nose? Well, we did do the nose. Why? Bring her forward!</p>
<p>Where'd you get the coconuts? And this isn't my nose. This is a false one. A newt? Well, Mercia's a temperate zone! Shut up!</p>
<p>Be quiet! Who's that then? Oh, ow! How do you know she is a witch? Where'd you get the coconuts?</p>
<p>Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! And this isn't my nose. This is a false one. Who's that then? Found them? In Mercia?! The coconut's tropical!</p>
<p>We found them. Ni! Ni! Ni! Ni! You don't frighten us, English pig-dogs! Go and boil your bottoms, sons of a silly person! I blow my nose at you, so-called Ah-thoor Keeng, you and all your silly English K-n-n-n-n-n-n-n-niggits!</p>
<p>I am your king. The nose? On second thoughts, let's not go there. It is a silly place. The nose? We shall say 'Ni' again to you, if you do not appease us. The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in winter, yet these are not strangers to our land.</p>`,
      editMode: false,
      visible: true
    },
  ];
}

export default NotesInitialData;
