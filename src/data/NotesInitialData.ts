import { Note } from "@/types/noteTypes"

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
      id: crypto.randomUUID(),
      title: "Welcome!",
      category: "f618f154-2c3a-48be-9007-0352661a35d5",
      modified: new Date(),
      contents: `<h1>Hey there, visitor!</h1><p><br></p><p><em>Notebot</em> is a demo for a simple React note-taking single page application. Feel free to mess around! You aren't breaking anything.</p><p><br></p><p>The demo is not intended for serious use. <u>Your changes may be deleted at any time.</u></p><p><br></p><h2>Links</h2><p><br></p><ul><li>My Website: <a href="https://www.valentinsigalov.com/" rel="noopener noreferrer" target="_blank">https://www.valentinsigalov.com/</a></li><li>My LinkedIn: <a href="https://www.linkedin.com/in/valentin-sigalov/" rel="noopener noreferrer" target="_blank">https://www.linkedin.com/in/valentin-sigalov/</a></li><li>My Github: <a href="https://github.com/prokhorvlg" rel="noopener noreferrer" target="_blank">https://github.com/prokhorvlg</a></li></ul>`,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "App features",
      category: "f618f154-2c3a-48be-9007-0352661a35d5",
      modified: dateAdd("minute", -55),
      contents: `<h1>What can you do using Notebot?</h1><p><br></p><h2>Categories with colors!</h2><p><br></p><p><strong>Access, create, recolor, and rename categories.</strong> These serve as buckets for notes.</p><p><br></p><h2>Notes with Rich Text</h2><p><br></p><p><strong>Read, create, and recategorize notes.</strong> This is the point of the application. A rich text editor lets you do some basic formatting, like emphasis, font sizes, etc.</p><p><br></p><h2>User Keys and Cloud Save</h2><p><br></p><p>When you first visit Notebot, a fresh user id is appended to the URL. All of your changes to categories, notes, and the app state are stored on the cloud. You may share this URL to let others see your notes. Refreshing the page should put you right back where you were before.</p><p><br></p><h2>Filtering</h2><p><br></p><p>The user may <strong>filter their notes</strong> by keywords if they desire. Simple!</p><p><br></p><h2>Timestamps</h2><p><br></p><p>Each note has a stored date for when it was last modified, which is how the notes list is sorted and provides functionality for the time ago tags.</p>`,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Shopping list",
      category: "7478f028-68ff-4c27-803e-3d40493fd0e4",
      modified: dateAdd("hour", -5),
      contents: ``,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Recommended video games",
      category: "7478f028-68ff-4c27-803e-3d40493fd0e4",
      modified: dateAdd("hour", -17),
      contents: ``,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Area 51 vacation plans",
      category: "7478f028-68ff-4c27-803e-3d40493fd0e4",
      modified: dateAdd("week", -1),
      contents: ``,
      editMode: false,
      visible: true,
      selected: false,
    },
    {
      id: crypto.randomUUID(),
      title: "An old note",
      category: "ca0d222b-02a4-43b0-8bf0-445fee31ff8a",
      modified: dateAdd("month", -4),
      contents: ``,
      editMode: false,
      visible: true,
      selected: false,
    },
  ]
}

export default NotesInitialData
