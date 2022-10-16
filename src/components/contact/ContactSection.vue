<template>
    <h2 class="heading">Contact <span>Me</span></h2>
    <form @submit.prevent="sendMessage" class="box">
        <base-input name="email" type="email" placeholder="Email" v-model.trim="email"></base-input>
        <base-input name="subject" type="text" placeholder="Subject"  v-model.trim="subject"></base-input>
        <base-input name="phone" type="tel" placeholder="Phone Number"  v-model.numbe="phone"></base-input>

        <!-- <textarea name="message" id="" cols="30" rows="10" class="box"></textarea> -->
        <base-input type="text" placeholder="Messgae"  v-model.trim="message"></base-input>
        
        <base-button @click="sendMessage" type='button'>
        Send Message
    </base-button>

    </form>
</template>

<script>
import BaseInput from '../UI/BaseInput.vue'
// import BaseCard from '../UI/BaseCard.vue'
import BaseButton from '../UI/BaseButton.vue'
import store from '../../store'

export default{
    emit:['modelValue', 'update:modelValue'],
    components:{
        BaseInput,
        // BaseCard,
        BaseButton,
    },
    data(){
       return {
        email:'',
        subject:'',
        phone:null,
        message:'',
}
    },
    methods:{
        sendMessage(){
            console.log("object");
            store.set("darkTheme",true)
            console.log(store.get("theme"))
            // console.log(store.get("theme"))
            // console.log(store.remove("theme"));
            // console.log(store.clearAll())
            console.log(store.state())
            // console.log(store.localStorage)
            // console.log([this.email, this.subject, this.phone,this.message]);
        }
    }
}
</script>

<style>
form{
    margin:1rem auto;
    max-width: 70rem;
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    padding:2rem;
    text-align: left;
}
</style>