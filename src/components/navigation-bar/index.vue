<template>
    <div class="navigation-box">
        <div class="blog-logo">
            <a class="logo"></a>
            <a :href="href" :target="isBlogHome ? '_self' : '_blank'">{{ slogan }} </a>
        </div>
        <div class="nav-area">
            <a class="nav-item" :href="href" :target="isBlogHome ? '_self' : '_blank'">
                <i class="iconfont icondingwei" style="color: #5e97d4;" v-if="isBlogHome"></i>
                博客
            </a>
            <a class="nav-item" v-for="nav in items" :key="nav.label" :href="nav.href" target="_blank">
                {{ nav.label }}
            </a>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
