<template>
    <div>
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
            <div style="background:red; margin:2% 0 2% 0; padding: 2%" v-for="c in contacts" :key="c.id">
            <div>
                <h5>{{c.firstName}} {{c.lastName}}</h5>
                <h5>{{c.displayName}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../axiosConfig'

    export default {
        name: 'AllMyContact',
        created(){
            this.getMyContacts()
        },
        data(){
            return {
                contacts: [],
                errorMsg: ''
            }
        },
        methods:{
            getMyContacts(){
                axios
                .get('api/contact/user/3')
                .then((response) => {
                    this.contacts = response.data
                    console.log(this.contacts + ' users')
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