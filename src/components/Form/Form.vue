<template lang="">
  <div>
    <h1 class="text-center text-indigo-600">Form element</h1>
    <Input :inputType="`text`" :placeholder="`Enter username`" :labelId="`username`"/>
    <Input :inputType="`password`" :placeholder="`Enter password`" :labelId="`password`"/>
    <Button :btnType="`button`" :textContent="`Sign up`"/>
    <Card>
        <img src="https://picsum.photos/id/123/320/210" alt="">
        <div class= "card-body p-4">
            <h1>Card title ipsum ..</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolore officiis at. Expedita, deserunt consectetur? Dolore aliquam quo tempore, necessitatibus, impedit veniam laudantium odio ut at, omnis laborum illum? Exercitationem animi nisi illum, facilis nulla molestias ea voluptatum excepturi aut.</p>
            <div class="flex gap-x-2 my-2">
                    <Button btnType="button" textContent="like" class="rounded-xl w-1/2"/>
                    <Button btnType="button" textContent="dislike" class="bg-red-500 w-1/2 rounded-xl p-2"/>
                
                </div>
            </div>
    </Card>

    </div>
</template>

<script>
import Input from "../../ui/Input.vue"
import Button from "../../ui/Button.vue"
import Card from "../../ui/Card.vue"
export default {
    name: "Form",

    components: {
        Input,
        Button,
        Card
    }

};

</script>
<style></style>
