<template>
    <ul class="archive-list" v-if="posts.length>0">
        <li v-for="(post,index) in posts" :key="index">
            <div class="article-title-line">
                <label class="article-content">{{ post.content}}</label>
            </div>
        </li>
    </ul>
</template>

<script>
import http from "../module/http/http"
export default {
    name: 'List',
    data() {
        return {
            posts: [],
            err:{}
        }
    },
    mounted() {
        this.init()
    },
    methods:{
        init(){
            this.getContentsList()
        },
        getContentsList(){
            http.get("/api/getPosts?request_url=/repos/ooszone/posts/contents/tips",{
            }).then((res)=>{
                let list = res&&res.data || []
                for(let index in list){
                    this.getContentInfo(list[index].path)
                }
            }).catch((err)=>{
                this.err = err
            })
        },
        getContentInfo(path){
            if(!path){return}
            http.get(`/api/getPosts?request_url=/repos/ooszone/posts/contents/${path}`,{
            }).then((res)=>{
                let obj = {
                    name:res.data.name,
                    content:decodeURIComponent(escape(window.atob(res.data.content)))
                }
                this.posts.push(obj);
            }).catch((err)=>{
                this.err = err
            })
        }
    }
}
</script>

<style scoped lang="less">

.archive-list {
    margin: 0 5px;
    padding: 10px 20px;

    li{
        margin:15px 0;
        background:#fff;
    }

    .article-year {
        font-size: 16px;
        padding: 5px 0;
        margin: 10px 0;
    }

    .article-title {
        color: #ff1028;
        font-size: 16px;
        min-width: 20px;
    }

    .article-title-line {
        padding: 5px;
    }

    .article-time {
        color: #999;
        font-size: 14px;
    }
}
</style>
