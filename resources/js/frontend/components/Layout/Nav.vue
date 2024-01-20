<template>
  <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link tag="a" class="nav-link" :to="{ path: '/' }"
            >Home</router-link
          >
        </li>

        <li class="nav-item">
          <router-link tag="a" class="nav-link" :to="{ path: '/book' }"
            >Books</router-link
          >
        </li>

        <li class="nav-item">
          <router-link
           
            tag="a"
            class="nav-link"
            :to="{ path: '/add_book' }"
            >Add Book</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.navbar {
  padding-left: 40px;
  padding-right: 40px;
  width: fit-content !important;
  margin: 20px auto !important;
  text-align: center !important;
  border-radius: 8px;
  * {
    color: white !important;
    font-weight: bold !important;
    font-size: 18px;
  }
  .nav-item {
    margin: 0px 10px;
    transition: 0.3s all linear;
    &:hover {
      transform: scale(0.9);
    }
  }
}
</style>