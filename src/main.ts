import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import '@fontsource/fraunces/300.css';
import '@fontsource/fraunces/400.css';
import '@fontsource/fraunces/500.css';
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/700.css';
import '@fontsource/fraunces/800.css';
import '@fontsource/fraunces/900.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
