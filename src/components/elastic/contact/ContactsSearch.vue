<template>
    <h1>-----------------------------------------------------------------------------------------</h1>
    <h3>Simple query</h3>
    <form @submit.prevent="getMyContactsElastic">
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
                    <option value="firstName">firstName</option>
                    <option value="lastName">lastName</option>
                    <option value="note">note</option>
                    <option value="email">email</option>
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
    <form @submit.prevent="getMyContactsAdvanced">
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
        <div style="display: inline-flex; margin-right:20px">
            <div style="display: block;">
                <p style="margin-bottom:-0.5px;">Select a field for searching:</p>
                <select @change="setFormDataAdv($event)" class="form-control">
                    <option value="firstName">firstName</option>
                    <option value="lastName">lastName</option>
                    <option value="note">note</option>
                    <option value="email">email</option>
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
                    <option value="firstName">firstName</option>
                    <option value="lastName">lastName</option>
                    <option value="note">note</option>
                    <option value="email">email</option>
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
            <div style="background:red; margin:2% 0 2% 0; padding: 2% width:33% display:grid" v-for="c in contacts" :key="c.id">
            <div>
                <h2>{{c.firstName}} {{c.lastName}}</h2>
                <h3>{{c.email}}</h3>
                <h5>{{c.note}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    name:'ContactsSearch',
    created(){
        let token = localStorage.getItem('token');
        axios.defaults.headers['Authorization'] = `${token}`
    },
    data(){
        return{
            contacts:[],
            errorMsg:'',
            api:'',
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
        getMyContactsElastic(){
            axios
            .post(this.api, this.formData)
            .then((response) => {
                this.contacts = response.data
                console.log(JSON.stringify(this.contacts) + ' contacts')
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retriving data'
            })
        },
        getMyContactsAdvanced(){
            axios
            .post('api/search/boolean/contacts', this.formDataAdvanced)
            .then((response) => {
                this.contacts = response.data
                console.log(this.contacts + ' contacts')
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retriving data'
            })
        },
        setFormData(event){
            this.formData.field = event.target.value;
            console.log(event.target.value + ' field')
        },
        setApi(event){
            this.api = 'api/search/'+ event.target.value + '/contacts';
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