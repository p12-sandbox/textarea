<template>
    <textarea v-model="text"></textarea>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';

    export default defineComponent({
        data(){
            return {
                text: ''
            }
        }
    });
</script>

<style lang='scss' scoped>

</style>