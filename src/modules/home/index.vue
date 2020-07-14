<template>
    <div class="main-body">
        <div class="navigation-box"></div>
        <div class="content-box">
            <div class="category">
                <el-tree
                    :data="category"
                    :props="defaultProps"
                    :highlight-current="true"
                    :default-expand-all="true"
                    @node-click="handleNodeClick"
                />
            </div>
            <div class="doc">
                <markdown-viewer ref="markdownViewer" />
            </div>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
