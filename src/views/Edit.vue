<template>
    <div id="mainPage" class="edox-post">
        <Menus title="PI"></Menus>
        <div>
            <div class="btn edit-save" v-on:click="submit">保存</div>
            <input class="edit-title" v-model="post.title" placeholder="标题：论个人认知的局限性"/>
            <div class="edox-edit-menu">
                <ul class="editor-mode">
                    <li class="pull-right"><a class="editor__menu--preview" title="预览模式"></a></li>
                    <li class="pull-right"><a class="editor__menu--live muted" title="实况模式"></a></li>
                    <li class="pull-right"><a class="editor__menu--edit" title="编辑模式"></a></li>
                    <li class="pull-right editor__menu--divider"></li>
                    <li id="wmd-zen-button" class="pull-right" title="全屏"><a class="editor__menu--zen"></a></li>
                </ul>
                <ul id="wmd-button-row" class="editor-btn-list">
                    <li class="wmd-button" id="wmd-bold-button" title="加粗 <strong> Ctrl+B">
                        <a class="editor__menu--bold" style="background-position: 0px 0px;"></a>
                    </li>
                    <li class="wmd-button" id="wmd-italic-button" title="斜体 <em> Ctrl+I">
                        <a class="editor__menu--bold" style="background-position: -20px 0px;"></a>
                    </li>
                    <li class="editor__menu--divider wmd-spacer1" id="wmd-spacer1"></li>
                    <li class="wmd-button" id="wmd-link-button" title="链接 <a> Ctrl+L"><a
                            class="editor__menu--bold" style="background-position: -40px 0px;"></a>
                    </li>
                    <li class="wmd-button" id="wmd-quote-button" title="引用 <blockquote> Ctrl+Q"><a
                            class="editor__menu--bold" style="background-position: -60px 0px;"></a></li>
                    <li class="wmd-button" id="wmd-code-button" title="代码 <pre><code> Ctrl+K"><a
                            class="editor__menu--bold" style="background-position: -80px 0px;"></a></li>
                    <li class="wmd-button" id="wmd-image-button" title="图片 <img> Ctrl+G"><a
                            class="editor__menu--bold" style="background-position: -100px 0px;"></a></li>
                    <li class="editor__menu--divider wmd-spacer2" id="wmd-spacer2"></li>
                    <li class="wmd-button" id="wmd-olist-button" title="数字列表 <ol> Ctrl+O"><a
                            class="editor__menu--bold" style="background-position: -120px 0px;"></a></li>
                    <li class="wmd-button" id="wmd-ulist-button" title="普通列表 <ul> Ctrl+U"><a
                            class="editor__menu--bold" style="background-position: -140px 0px;"></a></li>
                    <li class="wmd-button" id="wmd-heading-button" title="标题 <h1>/<h2> Ctrl+H"><a
                            class="editor__menu--bold" style="background-position: -160px 0px;"></a></li>
                    <li class="wmd-button" id="wmd-hr-button" title="分割线 <hr> Ctrl+R"><a
                            class="editor__menu--bold" style="background-position: -180px 0px;"></a></li>
                    <li class="editor__menu--divider wmd-spacer3" id="wmd-spacer3"></li>
                    <li class="wmd-button" id="wmd-undo-button" title="撤销 - Ctrl+Z"><a
                            class="editor__menu--bold" style="background-position: -200px -20px;"></a></li>
                    <li class="wmd-button" id="wmd-redo-button" title="重做 - Ctrl+Shift+Z"><a
                            class="editor__menu--bold" style="background-position: -220px -20px;"></a></li>
                    <li class="editor__menu--divider wmd-spacer4" id="wmd-spacer4"></li>
                    <li class="wmd-button" id="wmd-help-button" title="Markdown 语法"><a
                            class="editor__menu--bold" style="background-position: -300px 0px;"></a>
                    </li>
                </ul>
            </div>
            <div class="flex">
                <textarea class="edit-content flex1" style="border-right:0" v-model="post.post"
                          placeholder="..."></textarea>
                <div class="edit-content flex1" v-html="markdownHtml">
                    ...
                </div>
            </div>

        </div>
        <Tips :tips="tips"></Tips>
    </div>
</template>

<script>
  import Tips from '../components/tips'
  import Menus from '../components/menus'
  export default {
    name: 'Edit',
    components: { Menus, Tips },
    data(){
      return {
        post:{},//文章详情
        tips:{
          isShow: true,
          text: "记录是一种信仰"
        },

        markdownHtml:"",//
      }
    },
    methods:{
      submit(){

      }
    }
  }
</script>

<style scoped lang="less">
    body, html {
        background: #f9f9f9;
        padding: 0;

        #mainPage {

            .edox-edit-menu {
                height: 30px;
                border: 1px solid #ddd;
                margin: 0;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                overflow: hidden;
                background: #fff;
                position: relative;

                .editor__menu--live, .editor-mode--live {
                    background-position: -340px 0px;
                }

                .editor-mode {
                    height: 30px;
                    padding: 0;
                    margin: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 200px;

                    .pull-right {

                        a {
                            cursor: pointer;
                            display: block;
                            border: 5px solid #FFF;
                            width: 20px;
                            height: 20px;
                            background: url("../assets/imgs/editor@2x.png") transparent;
                            background-repeat: no-repeat;
                            background-size: 380px 60px;
                            text-indent: 110%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-transform: capitalize;
                            -moz-box-sizing: content-box;
                            -webkit-box-sizing: content-box;
                            box-sizing: content-box;
                            float: right;
                        }

                        .editor__menu--preview {
                            background-position: -360px 0px;
                        }

                        .editor__menu--live {
                            background-position: -340px -20px;
                        }

                        .editor__menu--edit {
                            background-position: -320px 0px;
                        }

                        .editor__menu--zen {
                            background-position: -240px 0px;
                        }

                        &
                        :hover {
                            background: #f6f6f6;
                        }

                    }
                }

                .editor-btn-list {
                    height: 30px;
                    white-space: nowrap;
                    overflow: hidden;
                    padding-left: 0;
                    margin: 0;

                    .wmd-button {

                        &
                        :hover {
                            background: #f6f6f6;
                        }

                        a {
                            cursor: pointer;
                            display: block;
                            float: left;
                            border: 5px solid #FFF;
                            width: 20px;
                            height: 20px;
                            background: url("../assets/imgs/editor@2x.png") #fff;
                            background-repeat: no-repeat;
                            background-size: 380px 60px;
                            text-indent: 110%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-transform: capitalize;
                            -moz-box-sizing: content-box;
                            -webkit-box-sizing: content-box;
                            box-sizing: content-box;
                        }

                    }
                }
            }

            .edit-save {
                position: fixed;
                width: 60px;
                height: 30px;
                line-height: 30px;
                padding: 0 0;
                text-align: center;
                margin: 7px auto;
                top: 0px;
                left: 50px;
                z-index: 100;
            }

            .edit-title {
                display: block;
                height: 48px;
                line-height: 48px;
                padding: 0 20px;
                width: 100%;
                box-sizing: border-box;
                color: #333;
                font-size: 16px;
                margin: 20px 0;
                border: 1px solid #ddd;
                border-radius: 5px;
                outline: #51c7fb;
                -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
                -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
                -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
                transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
            }

            .edit-content {
                display: block;
                min-height: 600px;
                height: auto;
                line-height: 30px;
                padding: 10px 20px;
                width: 50%;
                font-size: 16px;
                box-sizing: border-box;
                color: #333;
                outline: #51c7fb;
                border: 1px solid #ddd;
                border-top: none;
                border-radius: 0;
            }

        }
    }
</style>
