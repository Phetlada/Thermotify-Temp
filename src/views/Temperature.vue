<template>
  <div class="bg-black">
    <button
      @click="goBack()"
      class=" fixed top-7 left-7 fill-current w-8 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <h1 class="fixed top-7 inset-x-0 TitleTemp">ตู้เย็นคลังยาย่อย</h1>
    <button class=" fixed top-7 right-7 fill-current w-8 text-white ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div
      class="flex flex-col max-w-max h-screen px-7 mx-auto md:place-content-center md:pt-0 pt-16 "
    >
      <form class=" mt-8 space-y-4 flex flex-col justify-between">
        <div class="flex-row flex justify-between pt-4">
          <input
            type="button"
            value="ภาพรวม"
            class="text-black text-base p-1  bg-white rounded-full w-36  "
          />
          <input
            type="button"
            value="กราฟแสดงผล"
            class="text-white text-base p-1  bg-black rounded-full w-36  "
          />
        </div>
        <h1 class="text-white text-lg text-center">อุณหภูมิปัจจุบัน</h1>
        <h1 class="TitleBig ">32 ํ</h1>
        <div class=" space-y-2">
          <div class="flex justify-end ">
            <p class="text-white text-base text-center">องศาเซลเซียส</p>
          </div>
          <h1 class=" text-white text-lg text-center ">อุณหภูมิปกติ</h1>
        </div>
          <div class=" flex-row flex justify-between">
            <div class="box-temp">
              <h1 class="text-base">อุณหภูมิต่ำสุด</h1>
              <div class="flex justify-between">
                <h1 class="text-3xl pt-2 pb-2">32</h1>
                <p class="text-base pt-5 pr-10">ํc</p>
              </div>
              <h1 class="text-lg">1 ม.ค. 63</h1>
            </div>
            <div class="box-temp">
              <h1 class="text-base">อุณหภูมิสูงสุด</h1>
              <div class="flex justify-between">
                <h1 class="text-3xl pt-2 pb-2">32</h1>
                <p class="text-base pt-5 pr-10">ํc</p>
              </div>
              <h1 class="text-lg">1 ม.ค. 63</h1>
            </div>
          </div>
          <div class=" space-y-2 box-l-temp text-white">
            <h1 class=" pb-3 text-base absolute">อุณหภูมิเฉลี่ย</h1>
                <div class="flex justify-between">
                <h1 class="text-3xl pt-2 pb-2">32</h1>
                <p class="text-base pt-5 ">ํc</p><p class="text-3xl pt-2" >ภายในวันนี้</p>

                </div>

          </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
