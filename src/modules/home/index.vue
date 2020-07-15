<template>
    <div class="main-body">
        <navigation-bar />
        <div class="content-box">
            <el-tree
                :data="category"
                :props="defaultProps"
                :highlight-current="true"
                :default-expand-all="true"
                @node-click="handleNodeClick"
            />
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
