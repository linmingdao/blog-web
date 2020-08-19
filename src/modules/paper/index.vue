<template>
    <div class="main-body">
        <category-switcher />
        <navigation-bar v-if="navBar" />
        <div class="content-wrapper uniform-scroll">
            <div class="content-box">
                <div class="doc"><markdown-viewer :url="baseUrl + paperId + '.md'" /></div>
            </div>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
