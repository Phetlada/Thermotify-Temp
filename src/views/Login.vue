<template>
  <div class=" w-full">
    <div class="flex flex-col  h-screen max-w-max w-auto mx-auto justify-center">
      <h1 class=" text_logo text-5xl lg:text-8xl">Thermotify</h1>
      <h1 class="font-style-base text-white text-xl lg:text-2xl font-bold mt-12 lg:mt-20 mx-auto">กรุณาเข้าสู่ระบบ</h1>
      <button @click="Login()" class="transition duration-300 ease-in-out px-3 py-2 rounded-xl shadow-lg bg-color-line hover:bg-color-line-hover max-w-max w-auto flex flex-row mx-auto mt-10">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class=" fill-current w-6  lg:w-8 text-white ">
          <path d="M19.4 9.9a.6.6 0 010 1.2h-1.8v1.1h1.8a.6.6 0 110 1.3H17a.6.6 0 01-.6-.6V8c0-.3.2-.6.6-.6h2.4a.6.6 0 010 1.2h-1.8V10h1.8zm-3.9 3a.6.6 0 01-.6.6c-.2 0-.4 0-.5-.2l-2.5-3.4v3a.6.6 0 01-1.2 0V8a.6.6 0 01.6-.6c.2 0 .4 0 .5.2l2.4 3.4V8c0-.3.3-.6.7-.6.3 0 .6.3.6.6V13zm-5.7 0c0 .3-.3.6-.7.6a.6.6 0 01-.6-.6V8c0-.3.3-.6.6-.6.4 0 .7.3.7.6V13zm-2.5.6H4.9a.6.6 0 01-.6-.6V8c0-.3.3-.6.6-.6.4 0 .6.3.6.6v4.1h1.8a.6.6 0 010 1.3M24 10.3C24 5 18.6.6 12 .6S0 4.9 0 10.3c0 4.8 4.3 8.9 10 9.6.4.1 1 .3 1 .6.2.3.2.8.1 1l-.1 1.1c0 .3-.3 1.2 1 .7 1.3-.6 7-4.1 9.5-7a8.6 8.6 0 002.5-6"/>
        </svg>
        <p class="font-style-base text-white  text-sm lg:text-xl font-bold px-9">Log in</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    Login(){
      this.$store.dispatch('LoginLine')
      this.$router.push('/')
    }
  }
}
</script>
