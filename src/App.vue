<template>
  <div id="app">
    <div id="nav">
      <div id="site-name">
        <span>jrladera.dev</span>
      </div>
      <div id="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/blog">Blog</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  display: flex;
  justify-content: space-around;

  #site-name {
    font-weight: bold;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: #000000;

    &.router-link-exact-active {
      color: #2d7dbf;
    }
  }
}
</style>
