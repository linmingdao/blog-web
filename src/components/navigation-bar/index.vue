<template>
    <div class="navigation-box">
        <div class="blog-logo">
            <a class="logo"></a>
            <a class="logo-txt" :href="href" target="_self">{{ slogan }} </a>
        </div>
        <div class="nav-area">
            <a
                class="nav-item"
                :class="{ active: nav.model === currentModel }"
                v-for="nav in items"
                :key="nav.label"
                :href="nav.href"
                target="_blank"
            >
                <i class="iconfont" :class="[nav.icon]"></i><span class="nav-label">{{ nav.label }}</span>
            </a>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
