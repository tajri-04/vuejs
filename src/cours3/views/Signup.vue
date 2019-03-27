<template>
    <div class="row my-5">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <h3 class="text-center my-4">Signup</h3>
                    <div class="form-group">
                        <input v-bind:class="{'is-invalid' : errors.name,'is-valid' : !errors.name && this.submited}"
                                v-model="name" type="text" class="form-control" placeholder="Name">
                        <div class="errors" v-if="errors.name">
                              <smal class="text-danger" :key="error" v-for="error in errors.name">
                                {{error}}
                              </smal>
                        </div>
                    </div>
                    <div class="form-group">
                        <input v-bind:class="{'is-invalid' : errors.email,'is-valid' : !errors.email && this.submited}"
                                v-model="email" type="text" class="form-control" placeholder="Email">
                        <div class="errors" v-if="errors.email">
                            <smal class="text-danger" :key="error" v-for="error in errors.email">
                                {{error}}
                            </smal>
                        </div>
                    </div>
                    <div class="form-group">
                        <input v-bind:class="{'is-invalid' : errors.password,'is-valid' : !errors.password && this.submited}"
                                v-model="password" type="password" class="form-control" placeholder="password">
                        <div class="errors" v-if="errors.password">
                            <smal class="text-danger" :key="error" v-for="error in errors.password">
                                {{error}}
                            </smal>
                        </div>
                    </div>
                    <div class="form-group text-center">
                        <button @click="registerUser()" :disbled="loading" class="form-control btn btn-success">
                            <i class="fas fa-spin fa-spinner" v-if="this.loading"></i>
                            {{loading?'':'Signup'}}

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Axios from 'axios'
    export default {
        data(){
            return {
                name :'',
                email:'',
                password:'',
                errors :{},
                submited :false,
                loading:false
            }
        },
        methods:{
            registerUser(){
                this.loading =true;
                Axios.post('https://react-blog-api.bahdcasts.com/api/auth/register',
                    {name:this.name, email:this.email, password:this.password}).then(response => {
                        this.submited =true;
                        const {data} = response.data;
                        this.$root.auth = data;
                        localStorage.setItem('auth',JSON.stringify(data));
                        this.$router.push('/home');
                        this.loading =false;


                }).catch(({response}) => {
                    this.loading =false;
                    this.submited =true;
                    console.log("whatttttttt",response);
                    this.errors = response.data;
                })
            }
        }

    }
</script>