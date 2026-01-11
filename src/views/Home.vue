<template>
    <Me />
    <Introduce />

</template>
<script>
import Introduce from '@/components/Introduce.vue';
import Me from '@/components/Me.vue';


export default {
    name: "Home",

    components: {
        Me,
        Introduce,
    },

    data() {
        return {

        }
    }
}
</script>
