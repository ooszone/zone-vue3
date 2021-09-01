<template>
    <div class="edox-post">
        <Menus :title="post.title || ''"></Menus>

        <Tips :tips="tips"></Tips>
        <h4 class="edox-title">{{post.title}}</h4>

        <label class="edox-author">作者：{{post.username}}</label>
        <a class="edox-edit" v-bind:href="'edit.html?pid='+post.id">编辑</a>
        <a class="edox-edit" v-on:click="deletePost">删除</a>
        <p class="edox-article markdown-body" v-html="post.post"></p>
        <div class="edox-tags">
                <span class="edox-tag" v-for="(tag,index) in post.tags" :key="index">
                    {{tag}}
                </span>
        </div>
    </div>
    <!--<p>
        &lt;!&ndash;编辑/删除&ndash;&gt;
        <label v-if="post&&post.username==post.username">
            <span><a class="edit" href="/edit/{{encodeURIComponent(post.username)}}/{{encodeURIComponent(post.time.minute)}}/{{encodeURIComponent(post.title)}}">编辑</a></span>
            <span><a class="edit" href="/remove/{{encodeURIComponent(post.username)}}/{{encodeURIComponent(post.time.minute)}}/{{encodeURIComponent(post.title)}}">删除</a></span>
        </label>

        &lt;!&ndash;转载&ndash;&gt;
        <label v-if="user && (user.username != post.username)">
            <span><a class="edit" href="/reprint/{{encodeURIComponent(post.username)}}/{{encodeURIComponent(post.time.minute)}}/{{encodeURIComponent(post.title)}}">转载</a></span>
        </label>

    </p>
    &lt;!&ndash;文章信息&ndash;&gt;
    <p class="info">
        作者：<a href="/blog/{{encodeURIComponent(post.username)}}">{{post.username}}</a> |
        日期：{{post.time.minute}} |
        标签：
        <label v-for="tag in post.tags">
            <a v-if="tag" class="tag" href="/tags/{{encodeURIComponent(tag)}}">{{tag}}</a>
            <br>
            <a v-if="post.reprint_info.reprint_from" href="/blog/{{encodeURIComponent(post.reprint_info.reprint_from.username)}}/{{encodeURIComponent(post.reprint_info.reprint_from.minute)}}/{{encodeURIComponent(post.reprint_info.reprint_from.title)}}">原文链接</a>
        </label>
    </p>
    &lt;!&ndash;阅读量&ndash;&gt;
    <p>{{post.post}}</p>
    &lt;!&ndash;评论和转载信息&ndash;&gt;
    <p class="info">
        阅读: {{post.pv}} |
        评论：
        <label v-if="post.comments">
            {{post.comments.length || 0}}
        </label> |
        转载：
        <label v-if="post.reprint_info.reprint_to">
            {{post.reprint_info.reprint_to.length || 0}}
        </label>
    </p>-->

</template>

<script>
  import Menus from '../components/menus'
  import Tips from '../components/tips'
  export default {
    name: 'Article',
    components: { Menus, Tips },
    data(){
      return {
        tips: {
          isShow: false,
          text: "此处为阅读"
        },
        post: {},
        title: "日积月累"
      }
    },
    methods:{
      deletePost(){

      }
    }
  }
</script>

<style scoped lang="less">
    html, body {
        background: #fff;
        font-family: "Palatino Linotype", "Liberation Serif", serif;
    }

    .edox-post {
        padding: 10px 10px;

        .edox-title {
            font-size: 24px;
            font-weight: bold;
            display: block;
        }

        .edox-author {
            display: inline-block;
            font-style: italic;
            font-size: 14px;
            line-height: 30px;
            margin-right: 20px;
        }

        .edox-edit {
            display: inline-block;
            font-size: 14px;
            color: #cc0000;
            line-height: 30px;
        }

        .edox-article {
            color: #333333;
            font-size: 16px;
            line-height: 24px;
            padding-top: 20px;
        }

        .edox-tags {
            margin: 20px 0;
        }

        .edox-tag {
            background: #139dfb;
            font-size: 14px;
            color: #fff;
            border-radius: 5px;
            line-height: 20px;
            height: 20px;
            display: inline-block;
            padding: 0 5px;
            text-align: center;
            margin: 0 10px;
        }
    }


</style>
