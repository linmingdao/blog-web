<template>
    <div class="main-body">
        <category-switcher />
        <navigation-bar :is-blog-home="false" v-if="navBar" />
        <div class="content-wrapper">
            <div class="content-box">
                <div class="doc"><markdown-viewer :url="baseUrl + paperId + '.md'" /></div>
            </div>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
