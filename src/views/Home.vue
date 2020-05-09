<template>
  <div class="home">
    <ArrowCart v-if="showNav" />
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
import {mapState} from 'vuex';



export default {
  name: 'Home',
  components: {
    Store,
    Cart,
    ArrowCart
  },

  created() {
    store.commit('cartDesactive');
  },

  computed: {
    ...mapState(['showNav']),
  },
}
</script>

<style lang="scss">

.home {
  display: flex;
}

</style>
