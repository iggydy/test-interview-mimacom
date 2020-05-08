<template>
  <div class="ArrowCart" @click="activeMenuArrow">
    <div class="arrow"></div>
    <div class="arrow"></div>
    <div class="arrow"></div>
  </div>
</template>

<script>
// @ is an alias to /src

import {mapState} from 'vuex';
import store from '../store/index'

export default {
  name: 'ArrowCart',

  computed: {
        ...mapState(['menuActive']),
  },

  methods: {
    activeMenuArrow() {
      store.commit('activeMenu')
    }
  }
}
</script>

<style lang="scss">

.ArrowCart {
  position: fixed;
  z-index: 1;
  top: 25px;
  right: 25px;


  .arrow {
    width: 25px;
    height: 3px;
    background: #000;
    margin-bottom: 5px;

    &:last-child {
      margin: 0;
    }
  }
}

</style>
