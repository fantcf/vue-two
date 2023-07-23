<template>
    <section>
        <header class="top_tips">
            <span class="num_tip" v-if="fatherComponent == 'home'">123</span>
            <span class="num_tip" v-if="fatherComponent == 'item'">123</span>
        </header>
        <div v-if="fatherComponent == 'home'">
            <div class="home_logo item_container_style"></div>
            <router-link to="item" class="start button_style"></router-link>
        </div>
        <div v-if="fatherComponent == 'item'">
            <div class="item_back item_container_style">
                <div class="item_list_container">
                    <header class="item_title">123</header>
                </div>
            </div>
            <span class="next_item button_style"></span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'itemcontainer',
    props: ['fatherComponent'],
    data() {
        return {
            itemId: null,
            choosedNum: null,
            choosedId: null
        }
    },
    
}
</script>

<style lang="less">
.top_tips {
    position: absolute;
    background-color: skyblue;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url(../images/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    .num_tip {
        position: absolute;
        left: 0.48rem;
        bottom: 1.1rem;
        height: 0.7rem;
        width: 2.5rem;
        font-size: 0.6rem;
        font-family: '黑体';
        font-weight: 600;
        color: #a57c50;
        text-align: center;
    }
}
.item_container_style {
    height: 11.625rem;
    width: 13.15rem;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
    background-repeat: no-repeat;
}
.home_logo {
    background-image: url(../images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
}
.item_back {
    background-image: url(../images/2-1.png);
    background-size: 100% 100%;
}
.button_style {
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
}
.start {
    background-image: url(../images/1-4.png);
}
.next_item {
    background-image: url(../images/2-2.png);
}
.item_list_container {
    position: absolute;
    background-color: skyblue;
    width: 8.0rem;
    height: 7.0rem;
    top: 2.4rem;
    left: 3rem;
    -webkit-font-smoothing: antiali
}
.item_title {
    font-size: 0.65rem;
    color: white;
    line-height: 0.7re;
}
</style>