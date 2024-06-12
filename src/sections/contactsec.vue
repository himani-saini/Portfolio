<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container my-5">
    <div class="row">
      <div id="discuss" class="col-12 col-md-6 d-flex flex-column">
        <h1>Contact Me</h1>
        <h2 class="mt-3">Let's discuss</h2>
        <h2>something cool together</h2>
        <div class="img-content">
        <img :src="require('@/assets/contact.gif')" class="img-fluid" alt="Contact">
      </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column ">
        <label>Email Address </label>
        <input v-model="address" type="text" placeholder="Enter email address" class="form-control mb-3 bg-light">
          <label class="w-100">Message</label>
          <textarea v-model="message" name="user_message" id="user_message" 
          cols="20" rows="10" class="bg-light py-2 px-4 w-100 mb-3 col-xl-6 form-control">
          </textarea>
          <button @click="sendData" class="btn col-md-6 w-10 mx-auto" style="background-color: #DCCFED;">Send</button>
        </div>
        
      </div>
    </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'contactsec',
    data(){
      return{
      address:'',
      message:'',
      }
    },

    methods: {
      sendData(){

      }
    },
  }
</script>

  <style scoped>
  h1,h2{
    font-family: 'Josefin Sans';
    text-align: justify;
    color: #331C52
  }
  .img-content{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%
  }
  img{
    height:auto;
    width:50%;
    
  }
  
  input,label,button{
    font-family: 'Josefin Sans';
  }

  .container{
    margin-top: 8rem !important;
  }

  @media(max-width:768px){
   .row{
    flex-direction: row-reverse;
    flex-wrap: wrap;
   }
  }
  </style>