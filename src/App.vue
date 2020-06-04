<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  components: {
    Nav,
  },
}
</script>

<style>
:root {
  --bg: #191d32;
  --primaryColor: #e5e5d7;
  --secondaryColor: #45518e;
  --tertiaryColor: #232b47;
  --accentColor: #1dff8f;
  --baseFont: 'Lato';
  --dark: #121626;
  --bs: 0px 0px 22px rgba(0, 0, 0, 0.4), 0px 0px 4px rgba(0, 0, 0, 0.25);
  --white: #fff;
}

html {
  font-size: 16px;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  font-family: var(--baseFont), sans-serif;
  color: var(--primaryColor);
  background: var(--bg);
  line-height: 1.7;
  width: 80%;
  margin: 1rem auto;
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: var(--bg);
}

body::-webkit-scrollbar-thumb {
  background: var(--accentColor);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: normal;
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

button {
  cursor: pointer;
}

input,
button {
  font-family: var(--baseFont);
  font-size: 1rem;
}

input:focus,
textarea:focus,
button:focus,
video:focus {
  outline: none;
}

.vm--overlay {
  background: var(--bg);
  opacity: 0.4;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
}

nav li.router-link-exact-active {
  background-color: indianred;
  cursor: pointer;
}

@media screen and (max-width: 1093px) {
  body {
    width: 90%;
  }

  .preview-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 880px) {
  .preview-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 640px) {
  body {
    width: 95%;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 540px) {
  button {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 480px) {
  body {
    width: 95%;
  }
}
</style>
