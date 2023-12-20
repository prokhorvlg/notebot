import { MantineProvider } from '@mantine/core';
import { createTheme } from '@mantine/core';
import NoteScreen from '@/components/NoteScreen';

import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import './styles/style.scss'

export const theme = createTheme({})

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <NoteScreen />
    </MantineProvider>
  );
}