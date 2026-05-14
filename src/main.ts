import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
