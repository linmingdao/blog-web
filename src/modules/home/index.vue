<template>
    <div class="main-body">
        <category-switcher />
        <navigation-bar />
        <div class="content-wrapper">
            <div class="content-box">
                <div class="article-list">
                    <div class="article-item" v-for="item in flatCategory" :key="item.id">
                        <div class="date">
                            <i class="iconfont iconshijian" style="color: #b7b7b7;"></i>
                            {{ item.date }}
                        </div>
                        <a class="title" :href="articleBaseUrl + item.id" target="_blank" :title="item.label">
                            {{ item.label }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
