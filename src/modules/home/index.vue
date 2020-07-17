<template>
    <div class="main-body">
        <navigation-bar />
        <div class="content-box">
            <category-switcher />
            <div class="article-list">
                <div class="article-item" v-for="item in flatCategory" :key="item.id">
                    <span class="date">
                        <i class="iconfont iconshijian" style="color: #b7b7b7;"></i>
                        {{ item.date }}
                    </span>
                    <span>
                        <a class="title" :href="articleBaseUrl + item.id" target="_blank">{{ item.label }}</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
