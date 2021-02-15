<template>
  <div>
      <button @click="goBack()" class=" fixed top-7 left-7 fill-current w-8 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
      </button>
      <div class="flex flex-col max-w-max h-screen px-7 mx-auto md:place-content-center md:pt-0 pt-16">
        <h1 class="TitleFrom">การตั้งค่าอุปกรณ์</h1>
        <form class=" mt-8 space-y-4">
            <div class=" space-y-2">
                <p class="head-input"> ชื่ออุปกรณ์ </p>
                <input type="text" name="Sensorname" class="field-normal-input" >
            </div>

            <div class=" space-y-2">
                <p class="head-input"> กำหนดค่าอุณหภูมิ </p>
                <div class="flex flex-row justify-between">
                    <input type="text" name="TempMin" class="field-mini-input placeholder-white placeholder-opacity-75" placeholder="ต่ำสุด">
                    <input type="text" name="TempMax" class="field-mini-input placeholder-white placeholder-opacity-75" placeholder="สูงสุด">
                </div>
            </div>
                <p class="head-input"> Token </p>
                <div class="flex flex-row justify-between ">
                    <input type="text" name="SensorToken" class="field-mindle-input">
                    <input type="button" value="สร้างToken" class="text-white text-base p-2 bg-theamButton rounded-r-lg w-20  hover:bg-theamButton-hover md:relative  sm:w-28">
                </div>
        

            <div class=" flex-row flex justify-between ">
                <p class="head-input">การแจ้งเตือน</p>
                <label class="switch" >
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                </label>
            </div>
            <div class=" flex-row flex justify-between">
                <p class="head-input">การรับข้อมูลจาก sensor</p>
                <label class="switch" >
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="space-y-2 ">
                <div><input type="submit" value="บันทึก" class="text-white text-lg  font-style-base text-center p-2 bg-theamButton rounded-lg w-64  hover:bg-theamButton-hover md:relative sm:w-80 "></div>
                <div><input type="button" value="ลบอุปกรณ์" class="text-color-red text-lg  font-style-base text-center p-2 bg-bgcolor-main rounded-lg w-64  hover:bg-theamButton-hover md:relative  sm:w-80 absolute"></div>
            </div>
        </form>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
    
    
</style>