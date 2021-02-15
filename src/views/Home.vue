<template>
  <div class="home w-12">
    <router-link to="/addGroup"  class=" fixed top-7 right-7 text-white text-sm md:text-xl font-style-base "> เพิ่มกลุ่ม  </router-link>

    <button ref="NavBar" @click="showNavbar=true"  class=" fixed top-7 left-7 fill-current w-6 md:w-8 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
    </button>

    <transition name="slide-navbar">
      <NavBar v-if="showNavbar" 
        v-closable="{
          exclude: ['NavBar'],
          handler: 'onClose'
        }"
      />
    </transition>

    <div class=" w-screen">
      <GroupDevice class=" mx-auto pt-20"/>
    </div>

  </div>
</template>

<script>
import NavBar from '../components/Home/NavBar.vue'
import GroupDevice from '../components/Home/Group_Dashboard.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    GroupDevice
  },
  data(){
    return{
      showNavbar:false
    }
  },
  methods:{
    onClose(){
      this.showNavbar=false
    },
  },
  created(){
    let userID = this.$store.getters.getUserID
    console.log(userID)
    if(userID == 'null'){
      this.$router.push('/login')
    }
  }
  
}
</script>
<style>
  .slide-navbar-enter-active {
    animation: fadeRight .3s;
  }
  .slide-navbar-leave-active {
    animation: fadeRight .3s reverse ;
  }
  @keyframes fadeRight  {
    0% {
    opacity: 0;
    transform: translate(-20px) ;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

</style>
