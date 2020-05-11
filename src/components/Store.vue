<template>
<div class="Store">
    <div class="content">

        <h1 class="Store__title">Product List</h1>
        <div class="products-list">
        
            <div v-for="(item, index) in items.slice(lent, less)" 
                :key="index" 
                class="products"
                @click="pushProductsCartResponsive(item.id)">
                
                <div @click="item.favorite = !item.favorite">
                    <Heart class="products__heart" :class="{'active' : item.favorite }"/> 
    
                </div>
                
                <div class="products__img">
                    <img :src="item.image_url" alt="">
                </div>
                <div class="products__data">
                    <p class="products__data__title">
                        {{ item.productName }}
                    </p>
                    <p class="products__data__price">
                        {{ item.price }} €
                    </p>
                    <p class="products__data__description">
                        {{ item.productDescription }}
                    </p>
                    <p class="products__data__stock" v-if="item.stock > 0">
                        {{ item.stock }} left
                    </p>
    
                    <p class="products__data__stock" v-else>
                        Out of Stock
                    </p>
                    <button class="products__data__button" @click="item.stock-- && pushProductsCart(item.id)">
                       + add
                    </button>
    
                </div>
                
            </div>
    
        </div>
        <div class="Store__buttons">   
            <div @click="lessProducts" class="Store__buttons__left" :class="{'desactive-arrow': desactiveArrow}"></div>
            <div @click="moreProducts" class="Store__buttons__right"></div>
        </div>
    </div>
</div>
</template>

<script>

import {mapState} from 'vuex';
import Heart from '../components/Heart.vue'
import store from '../store/index.ts'



export default  {
    data() {
        return {
            lent: 0,
            less: 12,
            condition: true,
            color: true,
            desactiveArrow: true
        }
    },

    created() {

        store.commit('getProducts')

    },

    computed: {
        ...mapState(['cartbox', 'items']),
    },

    methods: {
        

        moreProducts() {

                this.less = this.less + 12;
                this.lent = this.lent + 12;
                this.desactiveArrow = false
            
        },

        lessProducts() {
            if ( this.lent > 0) {
                this.less = this.less - 12;
                this.lent = this.lent - 12;
                this.desactiveArrow = false;
            } else {
                this.desactiveArrow = true;
            }
        },

        pushProductsCart(value) {
             const newItem = this.items.find( id => id.id == value);
             const repeatItem = this.cartbox.find( id => id.id === value);
            
            if (!value) {
                return;
            } else {

                if (repeatItem) {
                    repeatItem.quant++;
                } else {
                    const newItemQuant = newItem
                    newItemQuant.quant = 1
                    this.cartbox.push(newItemQuant);
                }
            }
        },

        pushProductsCartResponsive(value) {
            const mq = window.matchMedia("(max-width: 768px)").matches;
            const newItem = this.items.find( id => id.id == value);
            const repeatItem = this.cartbox.find( id => id.id === value);
            
            if(mq){
                if (!value) {
                    return;
                } else {
                   
                    if (repeatItem) {
                        repeatItem.quant++;
                    } else {
                        const newItemQuant = newItem
                        newItemQuant.quant = 1
                        this.cartbox.push(newItemQuant);
                    }
                }
            } else {
                return;
            }
        },

        putProductFavorite(value) {
            const findItem = this.items.find( id => id.id == value);
            const favoriteState = findItem.favorite

            console.log(favoriteState)            

        }



    },

    components: {
        Heart
    }
}
</script>
<style lang="scss">

.Store {
    width: 72%;
    display: flex;
    justify-content: center;

    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 50px 0 50px 0;
        max-width: 1200px;

    }

    &__title {
        margin-bottom: 50px;
        font-size: 48px;
    }

    .products-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 30px;

        .products {
            position: relative;
            width: 22%;
            margin-bottom: 20px;
            box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            border-radius: 1%;
            overflow: hidden;

        &__heart {
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;

            svg {
                width: 20px;
                stroke: #fff;
                transition: 0.3s ease all;
                fill: transparent;
            }
        }

        .active {

            svg {
              fill: red;
              stroke: red;
            }
            
        }

        &__img {
            width: 100%;
            height: 120px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center center;
            }
        }

        &__data {
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
            align-items: center;

            &__title {
                font-size: 14px;
                font-weight: 900;
                width: 80%;
                margin-bottom: 10px;
            }

            &__price {
                font-size: 14px;
                width: 20%;
                text-align: right;
                align-self: flex-start;
            }

            &__description {
                width: 100%;
                font-size: 10px;
                height: 60px;
                margin-bottom: 35px;
            }

            &__stock {
                width: 70%;
                font-size: 14px;
            }

            &__button {
                width: 30%;
                box-shadow: 0 5px 16px 0 rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.19);
                border: 0;
                background: #fff;
                border-radius: 5%;
                height: 30px;
                cursor: pointer;

            }

        }
      }    
    }

    &__buttons {
        display: flex;
        width: 30%;
        justify-content: space-between;

        &__left {
            height: 15px; 
            width: 15px;
            border: 1px solid #000;
            border-width: 2px 2px 0 0;
            transform: rotate(225deg);
            cursor: pointer;
        }
        
        &__right {
            height: 15px; 
            width: 15px;
            border: 1px solid #000;
            border-width: 2px 2px 0 0;
            transform: rotate(45deg);
            cursor: pointer;
        }

        .desactive-arrow {
            opacity: 0.3;
        }
    }

    @media (max-width: 1100px) {

        .products-list {

            .products {
                width: 30%;

            }    
        }
        
    }

    @media (max-width: 768px) {
        width: 100%;

        .products-list {


            .products {
                width: 30%;


            &__img {
                width: 100%;
                height: 120px;
                overflow: hidden;
            }
          }    
        }
        
    }

    @media (max-width: 450px) {

        &__title {
            font-size: 36px;
        }
        .products-list {

            .products {
                width: 44%;


            &__img {
                width: 100%;
                height: 120px;
                overflow: hidden;
            }

            &__data {
                height: 70px;

                &__price {
                    width: 100%;
                    text-align: left;
                    align-self: flex-end;

                }

                &__description {
                    display: none;;

                }

                &__stock {
                    display: none;
                }

                &__button {
                    display: none;

                }

            }
          }    
        }
    }

}

</style>