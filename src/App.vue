<template>
  <div id="app">
    <!-- 加载公共的页头组件标签 header,footer 单独写在每个小组件中-->
      <router-view/>
  </div>
</template>

<style>
/*所有组件的style中，都可以用@import方式引入外部的css,后面加;*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
