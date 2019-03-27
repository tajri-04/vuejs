<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div :key="product.id"
               class="col-md-6"
               v-for="product in products">
            <Product v-on:add-to-cart="addToCart(product)"
                     :isInCart="isInCart(product)"
                    :product="product">

            </Product>
          </div>
        </div>
      </div>
      <div class="col-md-5 my-5">
        <div class="row">
          <Cart :items="cart"
                v-on:pay="pay()"
                 v-on:remove-from-cart="removeFromCart($event)">

          </Cart>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import products from '@/product.json';
import Product from '@/cour2/components/product';
import Cart from '@/cour2/components/Cart';
export default {
  name: 'app',
  components: {Product,Cart},
    data(){
      return {
        products:products,
        cart:[]
      }
    },
    methods:{
        addToCart(product){
            this.cart.push(product);
        },
        isInCart(product){
            const item =this.cart.find(item=> item.id === product.id);
            if(item){
                return true;
            }
            return false;
        },
        removeFromCart(product){
            this.cart = this.cart.filter(item => item.id !== product.id);
        },
        pay(){
            this.cart = [];
            alert('Shopping completed!')
        }
    },
    created(){

    }}
</script>

<style >
  body{
    background-color: red;
  }

</style>
