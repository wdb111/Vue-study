<template>
    <div class="hello">
        <div class="user">{{ nickName }}</div>
        <el-row class="tac" :gutter="8">
            <el-col class="col-box" :span="4">
                <el-menu
                    router
                    :default-active="activeName"
                    class="el-menu-vertical-demo"
                    @select="navSelect"
                >
                    <my-nav
                        v-for="(item, index) in dataList"
                        :index="'/router/' + item.url"
                        :key="index"
                        :itemData="item"
                    ></my-nav>
                </el-menu>
            </el-col>
            <el-col class="col-box" :span="20">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { getUsers } from "@/api/load";
import { mapState, mapMutations, mapActions } from "vuex";
import MyNav from "./my-nav.vue";
export default {
    name: "HelloWorld",
    components: {
        MyNav,
    },
    data() {
        return {
            timerKey: 0,
            activeName: this.$store.state.pageName,
            msg: "根实例",
            nickName: "",
            dataList: [
                {
                    title: "组件",
                    url: "myComponent",
                    children: [
                        {
                            title: "组件的使用",
                            url: "myComponent",
                        },
                        {
                            title: "自定义组件双向绑定",
                            url: "myModel",
                        },
                        {
                            title: "自定义组件数据更新",
                            url: "myCustomComponent",
                        },
                        {
                            title: "组件之间的通信",
                            url: "componentCom",
                        },
                    ],
                },
                {
                    title: "全局注册",
                    url: "globalReg",
                    children: [
                        {
                            title: "自定义组件",
                            url: "customComponents",
                        },
                        {
                            title: "自定义指令",
                            url: "myInstructions",
                        },
                        {
                            title: "过滤器",
                            url: "myFilters",
                        },
                    ],
                },
                {
                    title: "路由（vue-router）",
                    url: "",
                },
                {
                    title: "状态管理（vuex）",
                    url: "myVuex",
                },
                {
                    title: "watch高阶组件",
                    url: "myWatch",
                },
                {
                    title: "混入",
                    url: "myMixin",
                },
                {
                    title: "事件参数$event",
                    url: "myEvent",
                },
                {
                    title: "API",
                    url: "myApi",
                },
                {
                    title: "函数式组件",
                    url: "componentOfFunction",
                },
                {
                    title: "深度作用选择器（样式穿透）",
                    url: "myDeep",
                },
                {
                    title: "过渡&动画",
                    url: "myAnimation",
                },
            ],
        };
    },
    methods: {
        ...mapMutations(["PAGENAME"]),
        navSelect(index, item) {
            this.PAGENAME(index);
        },
    },
    created() {
        getUsers().then((res) => {
            this.nickName = res.data.nickName;
        });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
<style scoped>
.hello {
    height: 100%;
    padding: 20px 0;
    box-sizing: border-box;
}
.user {
    text-align: center;
    font: bold 20px "微软雅黑";
}
.el-menu-vertical-demo {
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
}
.tac {
    width: 100%;
    height: calc(100% - 26px);
}
.col-box {
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
}
</style>
