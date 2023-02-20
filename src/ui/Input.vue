<template lang="">
    <label :for="labelId" class="w-[300px] block my-3">
        <p class="text-indigo-500 my-5 ml-3" v-id="placeholder">{{placeholder}}</p>
        <input :type="inputType" :id="labelId" class="rounded-xl p-3 w-full  focus:outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-cyan-500" :placeholder="placeholder">
    </label>
</template>
<script>

export default {
    name: "Input",
        props: {
            labelId : {
                type: String,
                required: true,
            },
            placeholder: String,
            inputType: String,
        }
}
</script>
<style lang="">
    
</style>