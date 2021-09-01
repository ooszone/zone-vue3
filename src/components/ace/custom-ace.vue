<template>
    <main>
        <label class="code-title">{{language.toUpperCase()}}</label>
        <div class="code-container" ref="ace"></div>
    </main>
</template>
<script lang="js">
import ace from 'ace-builds'
// import 'ace-builds/webpack-resolver' // 在 webpack 环境中使用必须要导入
import 'ace-builds/src-noconflict/theme-nord_dark' // 默认设置的主题
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/ext-language_tools'

import 'ace-builds/src-noconflict/snippets/css'
import 'ace-builds/src-noconflict/snippets/html'
import 'ace-builds/src-noconflict/snippets/javascript'
import beautify from 'js-beautify'


export default {
    name: "custom-ace",
    props:["value","language","config","id"],
    data(){
        return {
            aceEditor:null,
            themePath: {
                'javascript':'ace/theme/monokai', // 不导入 webpack-resolver，该模块路径会报错
                'css':'ace/theme/monokai',
                'html':'ace/theme/monokai',
            },
            modePath: {
                'html':'ace/mode/html',
                'css':'ace/mode/css',
                'javascript':'ace/mode/javascript',
            }
        }
    },
    methods:{
        change () {
            this.$emit('input', this.aceEditor.getSession().getValue())
        }
    },
    mounted(){
         let _value = this.value
	    let _language = this.language || "js"
         let content = beautify[_language](_value) || ""

         this.aceEditor = ace.edit(this.$refs["ace"], {
            maxLines: 10, // 最大行数，超过会自动出现滚动条
            minLines: 10, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
            wrap:true,
            enableAutoIndent:true,
            wrapBehavioursEnabled:true,
            wrapMethod:"auto",
            useSoftTabs:true,
            indentedSoftWrap:true,
            fontSize: 14, // 编辑器内字体大小
            value:content,
            theme: this.themePath[this.language] || 'ace/theme/monokai', // 默认设置的主题
            mode: this.modePath[this.language], // 默认设置的语言模式
            tabSize: 4, // 制表符设置为 4 个空格大小
            ...this.config
        })
        //清除全选
        this.aceEditor.getSession().selection.clearSelection();
        // 激活自动补全代码
        this.aceEditor.setOptions({
            enableSnippets: true,
            enableLiveAutocompletion: true,
            enableBasicAutocompletion: true
        })

        //绑定事件
        this.aceEditor.getSession().on('change', this.change)
        this.aceEditor.commands.addCommand({
            name: 'save',
            bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
            exec: (editor)=> {
                this.$emit('save', {id:this.id,value:editor})
            }
        });
    }
}
</script>

<style scoped>
    .code-title{
        background: #2c3e50;
        display: inline-block;
        font-weight: bold;
        color:#fff;
        font-size:12px;
        padding:1px 5px 1px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        min-width:35px;
        width: auto;
        text-align: center;
        border-bottom:1px solid #2c3e50;
    }
    .code-container{
        cursor: pointer;
    }
</style>