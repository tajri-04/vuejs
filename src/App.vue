<template>
  <div id="app">
    <Navbar></Navbar>
    <!--<img src="./asserts/logo.png" alt="Vue logo">-->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>


</template>

<script>
import Navbar from './cours3/components/Navbar.vue'
export default {
  name: 'app',
  components: {Navbar},
    data(){
      return {

      }
    },
    methods:{

    },
    created(){

    }}
</script>

<style >
  . {
    font-family: 'Poppins';
    border-radius: 0px !important;
  }

  body{
    background-color: #f5f3ef;
  }

</style>
