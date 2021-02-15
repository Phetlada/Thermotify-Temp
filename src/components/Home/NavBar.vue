<template>
  <div class=" fixed left-0 w-72 h-screen bg-bgNavBar flex flex-col justify-between items-center py-9">
    <div class="w-full ">
        <div class="flex flex-col space-y-4 ">
            <img  src="../../assets/logo.png" class=" border-white border-4 rounded-full w-40 mx-auto">      
            <div class=" flex flex-row space-x-2  justify-center">
                <p class="font-style-base text-white text-lg  ">{{username}}</p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" style-icon">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="flex-col flex space-y-3 place-self-start mt-10 px-6">
            <button class="flex flex-row space-x-6 items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="31.9" height="31.9" class=" style-icon w-8">
                    <path d="M15.6 18.3h-.8a.7.7 0 01-.7-.7l.1-.4c.5-.4.9-1 1.1-1.7l.2.1c.5 0 1-1 1-1.6 0-.7 0-1.2-.5-1.2h-.2c0-1.8-.5-4-3.2-4-2.8 0-3.2 2.2-3.2 4h-.1c-.4 0-.5.5-.5 1.2 0 .6.5 1.6 1 1.6h.1c.3.6.7 1.2 1.1 1.6l.2.4c0 .4-.4.7-.8.7h-.7a3 3 0 00-3 3v.9c0 .5.4 1 .9 1h10c.6 0 1-.5 1-1v-.9a3 3 0 00-3-3zM24.6 10h-8.4l.5 2.1.4.5h7.5c.4 0 .7-.3.7-.7v-1.1c0-.4-.3-.7-.7-.7z"/><path d="M24.6 14.7h-7.3c-.2.7-.7 1.5-1.4 1.7V17.2h8.7c.4 0 .7-.3.7-.7v-1.1c0-.4-.3-.7-.7-.7zM24.6 19.3h-5.7c.3.6.6 1.3.6 2v.5h5c.5 0 .8-.3.8-.7V20c0-.4-.3-.7-.7-.7z"/><path d="M27.6 3H4.3C2 3 0 5 0 7.5v17.2c0 2.3 2 4.3 4.3 4.3h23.3c2.4 0 4.3-2 4.3-4.3V7.4C32 5 30 3 27.6 3zM30 24.7c0 1.2-1 2.2-2.3 2.2H4.3c-1.2 0-2.3-1-2.3-2.2V7.4C2 6 3 5 4.3 5h23.3c1.3 0 2.3 1 2.3 2.3v17.2z"/>
                </svg>
                <p class="font-style-base text-white text-base font-normal">จัดการผู้ใช้งาน</p>
            </button>
            <button class="flex flex-row space-x-6 items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  class=" style-icon w-8">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                </svg>
                <p class="font-style-base text-white text-base font-normal">ข้อมูลรายงาน</p>
            </button>
        </div>
    </div>       
      <div>
          <button class="text-red-800 text-xl font-style-base"> ออกจากระบบ</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            img:'../../assets/logo.png'
        }
    },
    mounted(){
        var profile = this.$store.getters.getProfile
        this.username=profile.username
        // this.img=profile.img
        console.log(this.img)
    },
    
}
</script>

<style>

</style>