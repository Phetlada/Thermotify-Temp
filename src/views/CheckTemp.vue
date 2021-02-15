<template>
<div class="font-style-base bg-black">
<header class="flex flex-row   bg-black  md:w-auto pt-6 ">
        <div class="pl-8"><button @click="goBack()" class=" top-6 fill-current w-8 text-white ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
        </button></div>
        <div class="pl-16 pr-14"><p class="text-white text-2xl">ตู้เย็นคลังยาย่อย</p></div>
        <div><button  class=" fill-current w-8 text-white ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
        </button></div>
</header>
<div class="pt-14 pl-3">
<button class="text-black text-lg   text-center  m-5  bg-white rounded-full w-40 h-8">ภาพรวม</button>
<button class="text-white text-lg   text-center  bg-black rounded-full  w-40 h-8 ">กราฟแสดงผล</button>
</div>
<div class="grid grid-rows-7 grid-col-6 gap-7 bg-black pl-8 pb-10 text-white "  >
    <div class="col-span-3 bg-black">
        <h1 class=" text-3xl  text-center pb-12" >อุณหภูมิปัจจุบัน</h1>
    </div>
    <div class="col-span-3 bg-black">
        <h1 class=" text-9xl text-center" >32 ํ</h1>
    </div>
    <div class="col-span-3 bg-black">
        <h1 class=" text-2xl  text-right pr-14" >องศาเซลเซียส</h1>
    </div>
    <div class="col-span-3 bg-black">
        <h1 class=" text-3xl  text-center " >อุณหภูมิปกติ</h1>
    </div>
    <div class="row-span-2 rounded-lg bg-gray-700 pl-5 pt-5 pr-9 ">
        <h1 class=" pb-3 text-1xl">อุณหภูมิต่ำสุด</h1>
        <h1 class=" pb-3 text-4xl">32</h1>
        <h1 class=" pb-3 text-1xl">1 ม.ค. 63</h1>
    </div>
    <div class="row-span-2 rounded-lg  bg-gray-700 pl-5 pt-5 pr-9 ">
        <h1 class=" pb-3 text-1xl">อุณหภูมิสูงสุด</h1>
        <h1 class=" pb-3 text-4xl"> {{ temp }}</h1>
        <h1 class=" pb-3 text-1xl">1 ม.ค. 63</h1>
    </div >v-model="temp"
        <div class="col-span-2  rounded-lg bg-gray-700 pl-5 pt-5 pr-9 ">
        <h1 class=" pb-3 text-1xl">อุณหภูมิเฉลี่ย</h1>
        <h1 class=" pb-3 text-4xl">32 ํc ภายในวันนี้</h1>
    </div>
</div>
</div>

</template>

<script>

export default {
    name: 'CheckTemp'
}
</script>