const NotesInitialData = [
    {
      id: 0,
      title: 'Welcome!',
      category: 0,
      modified: new Date('January 30, 2021 06:15:30').toLocaleString(),
      contents: `<h2 class="editor-font" style="font-family: Inter;">Hey there, visitor!</h2>
<p class="editor-font" style="font-family: Inter;">This is a demo for a simple React note-taking application.</p>
<p class="editor-font" style="font-family: Inter;">The demo is not intended for serious use. <strong>Your changes will not persist.</strong></p>
<p class="editor-font" style="font-family: Inter;">Created with love by <span style="text-decoration: underline;">@prokhorvlg (Valentin Sigalov)</span>!</p>`,
      editMode: false,
      visible: false
    },
    {
      id: 1,
      title: 'Area 51 vacation plans',
      category: 0,
      modified: new Date('June 26, 2021 12:15:30').toLocaleString(),
      contents: 'Contents of a note.',
      editMode: false,
      visible: false
    },
    {
      id: 2,
      title: 'Funniest joke ever',
      category: 0,
      modified: new Date('June 29, 2021 23:15:30').toLocaleString(),
      contents: 'Contents of a note.',
      editMode: false,
      visible: false
    },
    {
      id: 3,
      title: 'Lol tech specs',
      category: 1,
      modified: new Date('July 3, 2021 09:15:30').toLocaleString(),
      contents: 'Contents of a note.',
      editMode: false,
      visible: false
    },
    {
      id: 4,
      title: 'Cats on the moon',
      category: 2,
      modified: new Date('July 4, 2021 05:15:30').toLocaleString(),
      contents: 'Contents of a note.',
      editMode: false,
      visible: false
    },
  ];

export default NotesInitialData;
