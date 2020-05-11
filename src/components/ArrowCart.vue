<template>
  <div class="ArrowCart" @click="activeMenuArrow">
    <div  class="ArrowCart__container" :class="{'active-cart-menu' : menuActive}">
      <div class="ArrowCart__container__arrow" :class="{'active-arrow-top' : menuActive}"></div>
      <div class="ArrowCart__container__arrow" :class="{'active-arrow-mid' : menuActive}"></div>
      <div class="ArrowCart__container__arrow" :class="{'active-arrow-bot' : menuActive}"></div>
    </div>
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
      if ( this.menuActive ) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
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
  display: none;

  &__container {
    position: relative;

    &__arrow {
      width: 25px;
      height: 3px;
      background: #000;
      margin-bottom: 5px;
      transition: 0.3s ease all;

      &:last-child {
        margin: 0;
      }
    }
  }


  .active-cart-menu {
    right: 25px;
    top: 7px;
  }

  .active-arrow-top {
    position: absolute;
    transform: rotate(45deg);

  }

  .active-arrow-mid {
    display: none;
    
  }

  .active-arrow-bot {
    position: absolute;
    transform: rotate(-45deg);

    
  }


  @media (max-width: 768px) {
    display: block;
    
  }
}

</style>
