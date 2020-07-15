<template>
    <div class="main-body">
        <div class="navigation-box">
            <div class="blog-logo"><i class="iconfont iconjidan"></i> 叕要开始扯蛋了</div>
            <div class="nav-area">
                <a class="nav-item"><i class="iconfont icondingwei" style="color:#ff00a5;"></i> 博客</a>
                <a class="nav-item">微博</a>
                <a class="nav-item">B站</a>
                <a class="nav-item">github</a>
                <a class="nav-item">联系</a>
            </div>
        </div>
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
