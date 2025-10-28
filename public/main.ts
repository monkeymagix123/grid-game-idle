// src/main.js
import App from './App.svelte';

const app = new App({
    target: document.getElementById('svelte-app-container'), // Target the element by its ID
    // Or target the body if you want the app to take over the entire body
    // target: document.body, 
});

export default app;