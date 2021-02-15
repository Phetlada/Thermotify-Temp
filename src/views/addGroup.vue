<template>
  <div>
      <router-link to="/" class=" fixed top-7 left-7 fill-current w-8 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
      </router-link>

      <div class="flex flex-col max-w-max h-screen px-7 mx-auto md:place-content-center md:pt-0 pt-24    ">
        <h1 class="text-white text-3xl font-style-base text-center">การเพิ่มกลุ่ม</h1>
        <form class=" mt-8 space-y-4 ">
            <div class=" space-y-2">
                <p class="text-white text-lg  font-light font-style-base"> ชื่อกลุ่ม </p>
                <input type="text" name="gname" class=" p-2 bg-gray-300 rounded-lg w-64 sm:w-80 ">
            </div>
            <div class=" space-y-2">
                <p class="text-white text-lg  font-light font-style-base"> Line Token </p>
                <input type="text" name="gname" class=" p-2 bg-gray-300 rounded-lg w-64 sm:w-80"><br>
            </div>

            <div class=" ">
                <input type="submit" value="บันทึก" class="text-white text-lg  font-style-base text-center p-2 bg-theamButton rounded-lg w-64  hover:bg-theamButton-hover sm:w-80 md:relative  md:mt-14 absolute bottom-10">
            </div>
        </form>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>