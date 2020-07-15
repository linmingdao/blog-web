<template>
    <div class="main-body">
        <navigation-bar />
        <div class="content-box">
            <!-- <el-tree
                :data="category"
                :props="defaultProps"
                :highlight-current="true"
                :default-expand-all="true"
                @node-click="handleNodeClick"
            /> -->
            <div class="article-list">
                <div class="article-item" v-for="i in 20" :key="i">
                    <span class="date">
                        <i class="iconfont iconshijian" style="color: #b7b7b7;"></i>
                        2020年07月15日
                    </span>
                    <span>
                        <a class="title" :href="articlePrefix + '888'" target="_blank">新丑陋中国人</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
