<template>
    <div>
        <button v-on:click="indexingMessages()">Index messages</button>
        <p></p>
        <button v-on:click="indexingContacts()">Index contacts</button>
    </div>
</template>

<script>
import axios from '../../axiosConfig'

export default {
    name: 'Indexing',
        created(){
            let token = localStorage.getItem('token');
            axios.defaults.headers['Authorization'] = `${token}`
        },
        data(){
            return {
                indexes: [],
                errorMsg: ''
            }
        },
        methods:{
            indexingMessages(){
                axios
                .get('api/reindex-messages/account/' + 1)
                .then((response) => {
                    this.indexes =  response.data
                    console.log(this.indexes + ' indexes')
                })
                .catch((error) => {
                    console.log(error)
                    this.errorMsg = 'Error retriving data'
                })
            },
            indexingContacts(){
                axios
                .get('api/reindex-contact')
                .then((response) => {
                    this.indexes =  response.data
                    console.log(this.indexes + ' indexes')
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