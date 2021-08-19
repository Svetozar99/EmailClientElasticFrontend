<template>
    <div>
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
            <div style="background:red; margin:2% 0 2% 0; padding: 2%" v-for="m in myMessages" :key="m.id">
            <div>
                <h5>From: {{m.from}}</h5>
                <h5>Date: {{m.dateTime}}</h5>
                <h5>Subject: {{m.subject}}</h5>
                <h5>Content: {{m.content}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../axiosConfig'

    export default {
        name: 'AllMyContact',
        created(){
            let token = localStorage.getItem('token');
            axios.defaults.headers['Authorization'] = `${token}`
            this.getMyMessages()
        },
        data(){
            return {
                myMessages: [],
                errorMsg: ''
            }
        },
        methods:{
            getMyMessages(){
                axios
                .get('api/message/all-messages/by-account/1')
                .then((response) => {
                    this.myMessages = response.data
                    console.log(this.myMessages + ' messages')
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