<template>
    <div class="main-body" v-if="navBar">
        <navigation-bar :is-blog-home="false" />
        <div class="content-box">
            <div class="doc">
                <markdown-viewer :url="url" />
            </div>
        </div>
    </div>
    <div class="single-doc-box" v-else>
        <div class="doc-box">
            <markdown-viewer :url="url" />
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
