<template>
  <div id="app">
    <Header></Header>
    <AddTodo v-on:add-todo="addTodo"></AddTodo>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo.vue';
import axios from 'axios'
export default {
  name: 'app',
  components: {Todos, Header,AddTodo},
    data(){
      return {
          todos : []
      }
    },
    methods:{
        deleteTodo(id){
            axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
                .then( res => {
                    this.todos =  this.todos.filter(todo => todo.id !== id);
                })
                .catch(error => console.log(error));

        },
        addTodo(newTodo){
            const {title,completed} = newTodo;
            axios.post('https://jsonplaceholder.typicode.com/todos',
                {title,completed})
                .then(resp => {
                    this.todos =resp.data;
                } )
                .catch( error => console.log(error));

        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => {
                this.todos = res.data;
            }).catch(er => console.log("eeee") );
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
