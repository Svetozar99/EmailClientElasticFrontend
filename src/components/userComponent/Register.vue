<template>
    <form @submit.prevent="addUser">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3">
                <label class="form-label" for="firstName">First name:</label>
                <input class="form-control" type="text" id="firstName" v-model="formData.firstName" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="lastName">Last name:</label>
                <input class="form-control" type="text" id="lastName" v-model="formData.lastName" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="userName">Username:</label>
                <input class="form-control" type="text" id="userName" v-model="formData.username" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="password">Password:</label>
                <input class="form-control" type="password" id="password" v-model="formData.password" />
            </div>
            <button class="btn btn-primary">Register</button>
        </div>
    </form>
</template>

<script>
    import axios from '../../axiosConfig'
    export default {
        name: 'Register',
        created(){
            let token = localStorage.getItem('token');
            axios.defaults.headers['Authorization'] = `${token}`
        },
        data() {
            return {
                formData :{
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: ''
                },
                errorMsg: '',
                jwt: localStorage.getItem('token')
            }
        },
        methods: {
            addUser(){
                axios
                .post('/api/user/register', this.formData)
                .then(response => {
                    console.log(response)
                    alert('Succesfully registred')
                    this.$router.push({ path: '/login' })
                })
                .catch(error => {
                    console.log(error)
                    this.errorMsg = 'Error retrivign data'
                })
            },
        }
    }
</script>

<style scoped>

</style>