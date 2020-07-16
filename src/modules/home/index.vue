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
                <div class="article-item" v-for="item in flatCategory" :key="item.id">
                    <span class="date">
                        <i class="iconfont iconshijian" style="color: #b7b7b7;"></i>
                        {{ item.date }}
                    </span>
                    <span>
                        <a class="title" :href="articlePrefix + item.id" target="_blank">{{ item.label }}</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
