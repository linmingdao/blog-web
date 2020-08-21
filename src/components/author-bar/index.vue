<template>
    <div class="author-bar">
        <a class="badge-item author-badge" :href="author.link" target="_blank">
            <i class="logo iconfont iconzuozhe"></i>
            <span class="title">作者:</span>
            <span class="text">{{ author.name }} </span>
        </a>
        <a class="badge-item" :href="blog.link" target="_blank">
            <i class="logo iconfont iconblog"></i>
            <span class="title">博客:</span>
            <span class="text">{{ blog.name }} </span>
        </a>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
