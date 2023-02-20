<template lang="">
        <button type="submit    " class="border bg-green-500 px focus:ring-sky-500 text-white">{{textContent}}</button>
</template>
<script>

export default {
    name: "Button", 
    props: {
        btnType : String,
        textContent: String,
    }
}
</script>
<style lang="scss">
    
</style>