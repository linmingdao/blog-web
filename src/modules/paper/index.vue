<template>
    <div class="main-body">
        <div class="content-wrapper uniform-scroll">
            <div class="content-box">
                <author-bar v-if="showAuthorBar" />
                <div class="doc"><markdown-viewer :url="baseUrl + paperId + '.md'" /></div>
                <reward-bar v-if="showRewardBar" />
            </div>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
