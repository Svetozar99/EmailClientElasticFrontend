<template>
    <h1>-----------------------------------------------------------------------------------------</h1>
    <h3>Simple query</h3>
    <form @submit.prevent="getMyMessagesElastic">
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
        <div style="display: inline-flex; margin-right:20px">
            <div style="display: block;">
                <p style="margin-bottom:-0.5px">Select a search type:</p>
                <select @change="setApi($event)" class="form-control">
                    <option value="term">REGULAR</option>
                    <option value="fuzzy">FUZZY</option>
                    <option value="phrase">PHRASE</option>
                    <option value="range">RANGE</option>
                    <option value="prefix">PREFIX</option>
                </select>
            </div>
            <div style="display: block;">
                <p style="margin-bottom:-0.5px; margin-left:15px;">Select a field for searching:</p>
                <select @change="setFormData($event)" class="form-control" style="margin-left:15px">
                    <option value="from">from</option>
                    <option value="to">to</option>
                    <option value="subject">subject</option>
                    <option value="datetime">datetime</option>
                    <option value="content">content</option>
                    <option value="unread">unread</option>
                    <option value="account">account</option>
                    <option value="account.username">account.username</option>
                    <option value="cc">cc</option>
                    <option value="bcc">bcc</option>
                </select>
            </div>
            <div style="display: block;">
                <p style="margin-bottom:-0.5px; margin-left:70px;"> /</p>
                <div class="mb-3">
                    <label class="form-label" for="value" style="margin-left:20px; margin-right:10px">Type a search value:</label>
                    <input class="form-control" type="text" id="value" v-model="formData.value" />
                </div>
            </div>
        </div>
        <br>
        <button>Submit</button>
    </form>
    <h1>-----------------------------------------------------------------------------------------</h1>
    <h3>Advanced query</h3>
    <form @submit.prevent="getMyMessagesAdvanced">
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
        <div style="display: inline-flex; margin-right:20px">
            <div style="display: block;">
                <p style="margin-bottom:-0.5px;">Select a field for searching:</p>
                <select @change="setFormDataAdv($event)" class="form-control">
                    <option value="from">from</option>
                    <option value="to">to</option>
                    <option value="subject">subject</option>
                    <option value="datetime">datetime</option>
                    <option value="content">content</option>
                    <option value="unread">unread</option>
                    <option value="account">account</option>
                    <option value="account.username">account.username</option>
                    <option value="cc">cc</option>
                    <option value="bcc">bcc</option>
                </select>
            </div>
            <div style="display: block;">
                <p style="margin-bottom:-0.5px; margin-left:70px;"> /</p>
                <div class="mb-3">
                    <label class="form-label" for="value" style="margin-left:20px; margin-right:10px">Value 1:</label>
                    <input class="form-control" type="text" id="value" v-model="formDataAdvanced.value1" />
                </div>
            </div>
            <div style="display: block;">
                <p style="margin-bottom:-0.5px; margin-left:15px;">Select a boolean operator:</p>
                <select @change="setOperation($event)" class="form-control" style="margin-left:15px">
                    <option value="AND">AND</option>
                    <option value="OR">OR</option>
                    <option value="NOT">NOT</option>
                </select>
            </div>
            <div style="display: block;">
                <p style="margin-bottom:-0.5px; margin-left:15px;">Select a field for searching:</p>
                <select @change="setFormDataAdv1($event)" class="form-control" style="margin-left:15px">
                    <option value="from">from</option>
                    <option value="to">to</option>
                    <option value="subject">subject</option>
                    <option value="datetime">datetime</option>
                    <option value="content">content</option>
                    <option value="unread">unread</option>
                    <option value="account">account</option>
                    <option value="account.username">account.username</option>
                    <option value="cc">cc</option>
                    <option value="bcc">bcc</option>
                </select>
            </div>
            <div style="display: block;">
                <p style="margin-bottom:-0.5px; margin-left:70px;"> /</p>
                <div class="mb-3">
                    <label class="form-label" for="value" style="margin-left:20px; margin-right:10px">Value 2:</label>
                    <input class="form-control" type="text" id="value" v-model="formDataAdvanced.value2" />
                </div>
            </div>
        </div>
        <br>
        <button>Submit</button>
    </form>
    <div>
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
            <div style="background:red; margin:2% 0 2% 0; padding: 2%" v-for="m in messages" :key="m.id">
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
import axios from '../../../axiosConfig'

export default {
    name:'MessagesSearch',
    created(){
        let token = localStorage.getItem('token');
        axios.defaults.headers['Authorization'] = `${token}`
    },
    data(){
        return{
            //SearchType - REGULAR, FUZZY, PHRASE, RANGE, PREFIX
            //Operation - AND, OR, NOT
            //AdvancedQuery - field1, value1, field2, value2, operation
            //SimpleQuery - field, value
            //MessagesField - from, to, subject, datetime, content, 
                        // unread, account, account.username, cc, bcc, user 
            messages:[],
            errorMsg:'',
            api: '',
            formData:{
                field:'',
                value:''
            },
            formDataAdvanced:{
                field1:'',
                value1:'',
                field2:'',
                value2:'',
                operation:''
            }
        }
    },
    methods:{
        getMyMessagesElastic(){
            console.log(this.api + ' api')
            
            console.log(this.formData.value + ' value')
            axios
            .post(this.api, this.formData)
            .then((response) => {
                this.messages = response.data
                console.log(this.messages + ' messages')
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retrivin data'
            })
        },
        getMyMessagesAdvanced(){
            
            console.log(this.formDataAdvanced.value + ' value')
            axios
            .post('api/search/boolean/messages', this.formDataAdvanced)
            .then((response) => {
                this.messages = response.data
                console.log(this.messages + ' messages')
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retrivin data'
            })
        },
        setFormData(event){
            this.formData.field = event.target.value;
            console.log(event.target.value + ' field')
        },
        setApi(event){
            this.api = 'api/search/'+ event.target.value + '/messages';
        },
        setFormDataAdv(event){
            this.formDataAdvanced.field1 = event.target.value;
            console.log(event.target.value + ' field')
        },
        setFormDataAdv1(event){
            this.formDataAdvanced.field2 = event.target.value;
            console.log(event.target.value + ' field')
        },
        setOperation(event){
            this.formDataAdvanced.operation = event.target.value
        }
    }
}
</script>

<style scoped>

</style>