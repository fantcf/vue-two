<template>
    <section>
        <header class="top_tips">
            <span class="num_tip" v-if="fatherComponent == 'home'">{{ level }}</span>
            <span class="num_tip" v-if="fatherComponent == 'item'">题目{{ itemNum }}</span>
        </header>
        <div v-if="fatherComponent == 'home'">
            <div class="home_logo item_container_style"></div>
            <router-link to="item" class="start button_style"></router-link>
        </div>
        <div v-if="fatherComponent == 'item'">
            <div class="item_back item_container_style">
                <div class="item_list_container" v-if="itemDetail.length > 0">
                    <header class="item_title">{{ itemDetail[itemNum - 1].topic_name }}</header>
                    <ul>
                        <li v-for="(item, index) in itemDetail[itemNum - 1].topic_answer" class="item_list" @click="choosed(index, item.topic_answer_id)">
                            <span class="option_style" v-bind:class="{'has_choosed': choosedNum == index}">{{ chooseType(index) }}</span>
                            <span>{{ item.answer_name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
            <span class="submit_item button_style" v-else @click="submitAnswer"></span>
        </div>
    </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
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
    computed: mapState(['itemNum', 'level', 'itemDetail', 'timer']),
    created() {
		if(this.fatherComponent == 'home') {
			this.initializeData();
			document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)';
		}
    },
    methods: {
        ...mapActions(['addNum', 'initializeData']),
        chooseType: type => {
	  		switch(type){
	  			case 0: return 'A';
	  			case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
	  		}
	  	},
        choosed(type,id){
	  		this.choosedNum = type;
	  		this.choosedId = id;
	  	},
        nextItem(){
  			if (this.choosedNum !== null) {
	  			this.choosedNum = null;
	  			//保存答案, 题目索引加一，跳到下一题
	  			this.addNum(this.choosedId)
  			}else{
  				alert('您还没有选择答案哦')
  			}
  		},
        submitAnswer(){
	  		if (this.choosedNum !== null) {
	  			this.addNum(this.choosedId)
	  			clearInterval(this.timer)
	  			this.$router.push('score')
  			}else{
  				alert('您还没有选择答案哦')
  			}
	  	},
    }
    
}
</script>

<style lang="less">
.top_tips {
    position: absolute;
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
.submit_item{
    	background-image: url(../images/3-1.png);
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
    width: 8.0rem;
    height: 7.0rem;
    top: 2.4rem;
    left: 3rem;
    -webkit-font-smoothing: antiali;
}
.item_title {
    font-size: 0.65rem;
    color: white;
    line-height: 0.7re;
}
.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.6rem;
            color: white;
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
		}
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>