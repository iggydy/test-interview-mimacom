<template>
  <div class="home">
    <ArrowCart />
    <Store />
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Store from '../components/Store.vue'
import Cart from '../components/Cart.vue'
import ArrowCart from '../components/ArrowCart.vue'
import store from '../store/index'


export default {
  name: 'Home',
  components: {
    Store,
    Cart,
    ArrowCart
  },

  created() {
    store.commit('cartDesactive');
  }
}
</script>

<style lang="scss">

.home {
  display: flex;
}

</style>
