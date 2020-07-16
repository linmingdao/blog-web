<template>
    <div class="category-tree-mask">
        <div class="category-tree-box">
            <el-tree
                class="category-tree"
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
