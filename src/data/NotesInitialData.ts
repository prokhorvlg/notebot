import { Note } from "@/types/noteTypes"

export const DEFAULT_NOTE_ID = '8da602c2-e4a9-4ff9-9844-68365d2c2466'

const NotesInitialData = async (): Promise<Note[]> => {
  const dateAdd = (interval, units) => {
    var ret: Date | undefined = new Date()
    switch (String(interval).toLowerCase()) {
      case "year":
        ret.setFullYear(ret.getFullYear() + units)
        break
      case "quarter":
        ret.setMonth(ret.getMonth() + 3 * units)
        break
      case "month":
        ret.setMonth(ret.getMonth() + units)
        break
      case "week":
        ret.setDate(ret.getDate() + 7 * units)
        break
      case "day":
        ret.setDate(ret.getDate() + units)
        break
      case "hour":
        ret.setTime(ret.getTime() + units * 3600000)
        break
      case "minute":
        ret.setTime(ret.getTime() + units * 60000)
        break
      case "second":
        ret.setTime(ret.getTime() + units * 1000)
        break
      default:
        ret = new Date()
        break
    }
    return ret
  }
  return [
    {
      id: DEFAULT_NOTE_ID,
      title: "Welcome!",
      category: "f618f154-2c3a-48be-9007-0352661a35d5",
      modified: new Date(),
      contents: `<h1>Hey there, visitor!</h1><p><em>Notebot</em> is a demo for a simple React note-taking single page application. Feel free to mess around! You aren't breaking anything.</p><p>The demo is not intended for serious use. <u>Your changes may be deleted at any time.</u></p><h2>Links</h2><ul><li><p>My Website: <a target="_blank" rel="noopener noreferrer" href="https://www.valentinsigalov.com/">https://www.valentinsigalov.com/</a></p></li><li><p>My LinkedIn: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/valentin-sigalov/">https://www.linkedin.com/in/valentin-sigalov/</a></p></li><li><p>My Github: <a target="_blank" rel="noopener noreferrer" href="https://github.com/prokhorvlg">https://github.com/prokhorvlg </a></p></li></ul>`,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "App features",
      category: "f618f154-2c3a-48be-9007-0352661a35d5",
      modified: dateAdd("minute", -55),
      contents: `<h1>What can you do using <em>Notebot</em>?</h1><hr><h2>Categories with <mark>colors</mark>!</h2><p><u>Access, create, recolor, and rename categories.</u> These serve as buckets for notes.</p><h2>Notes with Rich Text</h2><p><u>Read, create, and recategorize notes.</u> This is the point of the application! A rich text editor lets you do some formatting, like emphasis, font sizes, etc.</p><h2>User Keys and Cloud Save</h2><p>When you first visit <em>Notebot</em>, a fresh user id is appended to the URL. All of your changes to categories, notes, and the app state are stored on the cloud. You may share this URL to let others see your notes. Refreshing the page should put you right back where you were before.</p><h2>Filtering</h2><p>The user may <u>filter their notes</u> by keywords if they desire. Simple!</p><h2>Timestamps</h2><p>Each note has a stored date for when it was last modified, which is how the notes list is sorted and provides functionality for the time ago tags.</p>`,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Shopping list",
      category: "7478f028-68ff-4c27-803e-3d40493fd0e4",
      modified: dateAdd("hour", -5),
      contents: `<p>This is a fresh note.</p>`,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Recommended video games",
      category: "7478f028-68ff-4c27-803e-3d40493fd0e4",
      modified: dateAdd("hour", -17),
      contents: `<p>This is a test for a list.</p><ul><li><p>Test!</p></li><li><p>Second test item.</p></li><li><p><u>Test number 3.</u></p></li></ul>`,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Area 51 vacation plans",
      category: "7478f028-68ff-4c27-803e-3d40493fd0e4",
      modified: dateAdd("week", -1),
      contents: `<p>This is a different fresh note.</p>`,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "An old note",
      category: "ca0d222b-02a4-43b0-8bf0-445fee31ff8a",
      modified: dateAdd("month", -4),
      contents: `<p>This note has been here for a very long time, and totally wasn't just generated.</p>`,
      editMode: false,
      visible: true,
      selected: false,
    },
  ]
}

export default NotesInitialData
