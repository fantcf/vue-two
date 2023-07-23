import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import ajax from '../config/ajax'

Vue.use(Vuex)

const state = {
    level: '第一周',
    itemNum: 1,
    allTime: 0,
    timer: '',
    answerid: [],
    itemDetail:  [
        {
            topic_id: 20,
            active_topic_id: 4,
            type: 'ONE',
            topic_name: '题目一',
            active_id: 1,
            active_title: '欢乐星期五标题',
            active_topic_phase: '第一周',
            active_start_time: '1479139200',
            active_end_time:  '1482163200',
            topic_answer: [
                {
                    topic_answer_id: 1,
                    topic_id: 20,
                    answer_name: '答案a',
                    is_standard_answer: 0
                },
                {
                    topic_answer_id: 2,
                    topic_id: 20,
                    answer_name: '正确答案',
                    is_standard_answer: 0,
                },
                {
                    topic_answer_id: 3,
                    topic_id: 20,
                    answer_name: '答案c',
                    is_standard_answer:  0
                },
                {
                    topic_answer_id: 4,
                    topic_id: 20,
                    answer_name: '答案d',
                    is_standard_answer: 1
                }
            ]
        },
        {
            topic_id: 21,
            active_topic_id: 4,
            type: 'MORE',
            topic_name: '题目二',
            active_id: 1,
            active_title: '欢乐星期五标题',
            active_topic_phase: '第一周',
            active_start_time: '1479139200',
            active_end_time:  '1482163200',
            topic_answer: [
                {
                    topic_answer_id: 5,
                    topic_id: 21,
                    answer_name: '答案a',
                    is_standard_answer: 1
                },
                {
                    topic_answer_id: 6,
                    topic_id: 21,
                    answer_name: '正确答案',
                    is_standard_answer: 0,
                },
                {
                    topic_answer_id: 7,
                    topic_id: 21,
                    answer_name: '答案c',
                    is_standard_answer:  0
                },
                {
                    topic_answer_id: 8,
                    topic_id: 21,
                    answer_name: '答案d',
                    is_standard_answer: 0
                }
            ]
        },
        {
            topic_id: 21,
            active_topic_id: 4,
            type: 'MORE',
            topic_name: '题目三',
            active_id: 1,
            active_title: '欢乐星期五标题',
            active_topic_phase: '第一周',
            active_start_time: '1479139200',
            active_end_time:  '1482163200',
            topic_answer: [
                {
                    topic_answer_id: 9,
                    topic_id: 21,
                    answer_name: '答案a',
                    is_standard_answer: 1
                },
                {
                    topic_answer_id: 10,
                    topic_id: 21,
                    answer_name: '正确答案',
                    is_standard_answer: 0,
                },
                {
                    topic_answer_id: 11,
                    topic_id: 21,
                    answer_name: '答案c',
                    is_standard_answer:  0
                },
                {
                    topic_answer_id: 12,
                    topic_id: 21,
                    answer_name: '答案d',
                    is_standard_answer: 0
                }
            ]
        },
        {
            topic_id: 21,
            active_topic_id: 4,
            type: 'MORE',
            topic_name: '题目四',
            active_id: 1,
            active_title: '欢乐星期五标题',
            active_topic_phase: '第一周',
            active_start_time: '1479139200',
            active_end_time:  '1482163200',
            topic_answer: [
                {
                    topic_answer_id: 13,
                    topic_id: 21,
                    answer_name: '答案a',
                    is_standard_answer: 1
                },
                {
                    topic_answer_id: 14,
                    topic_id: 21,
                    answer_name: '正确答案',
                    is_standard_answer: 0,
                },
                {
                    topic_answer_id: 15,
                    topic_id: 21,
                    answer_name: '答案c',
                    is_standard_answer:  0
                },
                {
                    topic_answer_id: 16,
                    topic_id: 21,
                    answer_name: '答案d',
                    is_standard_answer: 0
                }
            ]
        },
        {
            topic_id: 21,
            active_topic_id: 4,
            type: 'MORE',
            topic_name: '题目五',
            active_id: 1,
            active_title: '欢乐星期五标题',
            active_topic_phase: '第一周',
            active_start_time: '1479139200',
            active_end_time:  '1482163200',
            topic_answer: [
                {
                    topic_answer_id: 17,
                    topic_id: 21,
                    answer_name: '答案a',
                    is_standard_answer: 1
                },
                {
                    topic_answer_id: 18,
                    topic_id: 21,
                    answer_name: '正确答案',
                    is_standard_answer: 0,
                },
                {
                    topic_answer_id: 19,
                    topic_id: 21,
                    answer_name: '答案c',
                    is_standard_answer:  0
                },
                {
                    topic_answer_id: 20,
                    topic_id: 21,
                    answer_name: '答案d',
                    is_standard_answer: 0
                }
            ]
        }
    ]
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})