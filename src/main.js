const { createApp } = require('vue');
import App from './App.vue';

createApp(App).mount('#app');
console.log(`Hello Node.js v${process.versions.node}!`);
