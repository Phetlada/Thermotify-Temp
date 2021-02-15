<template>  
    <div class=" flex flex-col w-11/12 md:max-w-max   h-screen mx-auto p-5">
        <div v-for="work in works" :key="work.name">
            <div id="GroupName" class=" flex  space-x-2 content-center flex-wrap">
                <p class="text-white text-base font-style-base pl-2">{{work.name}}</p>
                <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" style-icon">
                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                </button>
            </div>

            <div id="Device" class=" bg-bgGroupDevice bg-opacity-50 rounded-md w-full md:w-80 p-4 mt-6">
                <div v-for="device in work.groupDevice" :key="device">
                    <button v-if=" device.temp > 30 || device.temp < 0 " 
                        class=" transition duration-75 ease-in-out bg-red-400 hover:bg-red-600 home-dashboard w-full relative">
                        <p class="text-white text-sm md:text-base font-style-base ">{{device.nameDevice}}</p>
                        <p class="text-white text-sm md:text-base font-style-base ml-2">{{device.temp}} ºC</p>
                        <div class=" absolute bottom-2 right-2 border-black border-2 py-1 px-2 w-16 rounded-md text-white  text-xs  font-style-base " >
                            ผิดปกติ
                        </div>
                    </button>
                    <button v-else-if="device.temp=='Error'" 
                        class=" transition duration-75 ease-in-out bg-yellow-400 hover:bg-yellow-500  home-dashboard w-full relative">
                        <p class="text-white text-sm md:text-base font-style-base">{{device.nameDevice}}</p>
                        <p class="text-white text-sm md:text-base font-style-base ml-2">{{device.temp}} ºC</p>
                        <div class=" absolute bottom-2 right-2 border-black border-2 py-1 px-2 w-16 rounded-md text-white  text-xs  font-style-base " >
                            ขัดข้อง
                        </div>
                    </button>
                    <button v-else class="transition duration-75 ease-in-out  bg-green-500 hover:bg-green-600 home-dashboard w-full relative">
                        <p class="text-white text-sm md:text-base font-style-base">{{device.nameDevice}}</p>
                        <p class="text-white text-sm md:text-base font-style-base ml-2">{{device.temp}} ºC</p>
                        <div class=" absolute bottom-2 right-2 border-black border-2 py-1 px-2 w-16 rounded-md text-white  text-xs  font-style-base " >
                            ปกติ
                        </div>
                    </button>   
                </div>
                <router-link to="/addDevice" @click="this.$router.push('/addGroup')" class="transition duration-75 ease-in-out hover:bg-bgGroupDevice w-full border-dashed border-2 home-dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="fill-current w-14 mx-auto text-gray-400 font-light ">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data(){
        return{
            works:[
                {
                    name:'กลุ่มตู้เย็นคลังยา',
                    groupDevice:[
                        {
                            nameDevice:'ตู้เย็นคลังยาย่อย',
                            temp:'32' 
                        },
                        {
                            nameDevice:'ตู้เย็นคลังยาหลัก',
                            temp:'Error' 
                        },
                        {
                            nameDevice:'ตู้เย็นคลังยาหลักๆๆๆๆๆ',
                            temp:'10' 
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>