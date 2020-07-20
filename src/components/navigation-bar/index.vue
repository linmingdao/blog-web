<template>
    <div class="navigation-box">
        <div class="blog-logo">
            <a class="logo"></a>
            <a :href="href" target="_self">{{ slogan }} </a>
        </div>
        <div class="nav-area">
            <el-popover ref="popover" placement="bottom" width="300" trigger="focus">
                <div class="filter-list">
                    <a
                        class="filter-item"
                        v-for="item in filterItems"
                        :title="item.label"
                        :key="item.id"
                        :href="articleBaseUrl + item.id"
                        target="_blank"
                    >
                        {{ item.label }}
                    </a>
                </div>
                <el-input
                    class="filter-ipt"
                    style="width:200px;"
                    size="medium"
                    placeholder="请输入"
                    suffix-icon="el-icon-search"
                    slot="reference"
                    @input="handleInput"
                    v-model="filterTxt"
                />
            </el-popover>
            <a class="nav-item" v-for="nav in items" :key="nav.label" :href="nav.href" target="_blank">
                <i class="iconfont" :class="[nav.icon]"></i><span class="nav-label">{{ nav.label }}</span>
            </a>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
