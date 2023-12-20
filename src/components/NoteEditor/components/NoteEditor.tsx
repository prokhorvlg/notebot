import { Note } from "@/types/noteTypes"
import { findObjectInArray } from "@/utils/objectUtils"
import { RichTextEditor, Link } from "@mantine/tiptap"
import { useEditor } from "@tiptap/react"
import Highlight from "@tiptap/extension-highlight"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import Superscript from "@tiptap/extension-superscript"
import SubScript from "@tiptap/extension-subscript"
import "./NoteEditor.scss"
import { useEffect } from "react"

const NoteEditor = ({
  selectedNoteID,
  notes,
  changeNote,
}: {
  selectedNoteID: string | null
  notes: Note[]
  changeNote: (id: string, newNote: Partial<Note>) => void
}) => {
  if (!selectedNoteID) return null
  const selectedNote = findObjectInArray(selectedNoteID, notes)
  const noteContent = selectedNote ? selectedNote.contents : ""

  const onEditorChange = (newValue: string) => {
    const hasChanged = noteContent !== newValue
    console.log(newValue)
    if (hasChanged) {
      changeNote(selectedNoteID, {
        contents: newValue,
        modified: new Date(),
      })
    }
  }

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: noteContent,
    onUpdate: (props) => onEditorChange(props.editor.getHTML()),
  })

  // Force new content into editor when selected note changes
  useEffect(() => {
    if (!editor) return
    editor.commands.setContent(noteContent)
  }, [selectedNoteID])

  if (selectedNote && noteContent !== null) {
    return (
      <RichTextEditor
        editor={editor}
        className="mantine-editor"
        styles={{
          root: {
            border: "none",
          },
          content: {
            padding: "20px",
          },
        }}
      >
        <RichTextEditor.Toolbar sticky>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    )
  } else {
    return null
  }
}

export default NoteEditor
