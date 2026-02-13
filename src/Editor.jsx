import { useEditor, EditorContent, EditorContext } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import { useMemo } from 'react'
import MenuBar from './MenuBar'

function Editor() {
  const editor = useEditor({
    extensions: [StarterKit], // define your extension array
    // content: '<p>Write about anything</p>', // initial content
  })

  // Memoize the provider value to avoid unnecessary re-renders
  const providerValue = useMemo(() => ({ editor }), [editor])

  return (
    <EditorContext.Provider value={providerValue}>
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} />
    </EditorContext.Provider>
  )
}

export default Editor