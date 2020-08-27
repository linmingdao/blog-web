<template>
    <div class="navigation-box">
        <div class="banner-area">
            <category-switcher ref="switcher" :category="category" :article-base-url="articleBaseUrl" />
            <a class="slogan" v-html="slogan"></a>
        </div>
        <div class="nav-area">
            <a
                class="nav-item"
                :class="{ active: nav.model === currentModel }"
                v-for="nav in items"
                :key="nav.label"
                :href="nav.href"
                :target="nav.target"
            >
                <i class="iconfont" :class="[nav.icon]"></i><span class="nav-label">{{ nav.label }}</span>
            </a>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
