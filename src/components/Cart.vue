<template>
<div class="Cart" :class="{'active-cart' : !menuActive}">

    <h1>Cart</h1>

    <div :class="'cart-box'">

    <div v-for="(item, index) in cartbox" :key="index">
        <div v-if="item.quant > 0"  class="box">
            <div class="box__img">
                <img :src="item.image_url" alt="">
            </div>
            <div class="box__info">
                <p class="box__info__title">{{item.productName}}</p>
                <div class="box__info__count">
                    <button @click="item.quant--" >-</button>
                    <p>{{ item.quant }}</p>
                    <button @click="item.quant++" >+</button>
                </div>
            </div> 
            <p class="box__price">{{ item.price * item.quant }} €</p>        
        </div>
    </div>
    </div>

    <div class="total">
        <button>Make a payment</button>
        <p>Totla : 10000€</p>
    </div>
    


        
</div>
</template>

<script>

import {mapState} from 'vuex';


export default  {


    data() {
        return {
 
        }
    },


    computed: {
        ...mapState(['cartbox' , 'menuActive']),
    },

    methods: {

        
    },
}
</script>
<style lang="scss" scoped>

.Cart {
    width: 25%;
    background: #fff;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    padding: 20px;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s all ease;

    .cart-box {
        height: 80%;
        overflow-y: auto;

        &::-webkit-scrollbar-y {
            display: none;
        }

    }



    .box {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        &__img {
            width: 30%;
            height: 100px;
            overflow: hidden;
            margin-right: 30px;


            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center center;
            }

        }

        &__info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 40%;

            &__title {
                margin-bottom: 10px;
                font-size: 14px;
                font-weight: 900;

            }

            &__count {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                align-self: self-end;
                border: 1px solid rgba(0, 0, 0, 0.164);
                border-radius: 10%;

                p {
                    margin: 0 10px;
                }

                button {
                    border: 0px;
                    background: #fff;
                    font-size: 18px;
                    cursor: pointer;
                }
            }
        }

        &__price {
            text-align: right;
            font-size: 14px;
            width: 22%;

        }
    }

    .total {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        button {
            background: rgba(255, 68, 0, 0.555);
            border: 0px;
            padding: 10px 80px;
            font-size: 14px;
            border-radius: 3%;
            color: #fff;
        }
    }

    @media (max-width: 1100px) {

        .box {

            &__img {
                height: 70px;
            }
        }

        .total {

            button {
                padding: 10px 20px;
            }
        }

    }

    @media (max-width: 768px) {
        width: 95%;

        .box {

            &__img {
                height: 130px;
            }
        }

        .total {

            button {
                padding: 10px 20px;
            }
        }

    }

    @media (max-width: 450px) {
        width: 91%;

        .box {

            &__img {
                height: 90px;
            }
        }

        .total {

            button {
                padding: 10px 20px;
            }
        }

    }


}

.active-cart {
    width: 0;
    padding: 0;
    opacity: 0;
}
</style>