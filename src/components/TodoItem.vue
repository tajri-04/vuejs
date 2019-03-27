<template>
    <div class="todo-item" v-bind:class="{'is-completed':todo.completed}">
        <p>
            <input type="checkbox"   v-on:change="markCompleted">
            {{todo.title}}
            <button v-on:click="$emit('del-todo')" class="del">X</button>
        </p>

    </div>
</template>
<script>
    export default {
        name:'todoItem',
        props :["todo"],
        methods:{
            markCompleted(){
                this.todo.completed = true;
            }
        }
    }

</script>
<style scoped>
    .todo-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
    .is-completed{
        text-decoration:line-through;
    }
</style>