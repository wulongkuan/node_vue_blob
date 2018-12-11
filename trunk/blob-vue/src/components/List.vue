<template>
    <Rate allow-half v-model="valueHalf" />
</template>
<script>
    export default {
        data () {
            return {
                valueHalf: 2.5
            }
        }
    }
</script>
