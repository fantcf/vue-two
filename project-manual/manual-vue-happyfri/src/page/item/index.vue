<template>
    <div>
        <itemcontainer father-component="item"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer.vue';

export default {
    name: 'item',
    components: {
        itemcontainer
    }
}
</script>