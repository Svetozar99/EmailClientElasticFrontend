<template>
    <div>
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
            <div style="background:red; margin:2% 0 2% 0; padding: 2%" v-for="u in users" :key="u.id">
            <div>
                <h5>{{u.firstName}} {{u.lastName}}</h5>
                <h5>{{u.username}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../axiosConfig'

    export default {
        name: 'AllUsers',
        created(){
            this.getUsers()
        },
        data(){
            return {
                users: [],
                errorMsg: ''
            }
        },
        methods:{
            getUsers(){
                axios
                .get('api/user')
                .then((response) => {
                    this.users = response.data
                    console.log(response.data + ' users')
                })
                .catch((error) => {
                    console.log(error)
                    this.errorMsg = 'Error retriving data'
                })
            }
        }
    }
</script>

<style scoped>

</style>