<template>
    <main class="main-divider">
        <label style="margin:10px 10px;display:inline-block">各种样式<b>分割线</b>集合[cmd/ctr+s保存并渲染] (请在支持H5的浏览器下体验)</label><br/>
        <ace style="margin:0 10px" :language="'html'" :config="dividerHtmlConfig" :value="dividerHtml"></ace>
        <section v-for="(item,index) in list" class="ace-bth-section" v-bind:key="`${index}-ace-section`">
            <div class="flex1">
                <ace class="code-container"
                     :id="index"
                     @save="save"
                     :language="item.language.toLowerCase()"
                     :value="item.content">
                </ace>
                <button class="refresh" @click="refresh(item,index)">运行=></button>
            </div>
            <div :class="`iframe-container flex1 ${refreshing&&refreshIndex==index?'container-loading':''}`" :id="`ace-${index}-container`"></div>
        </section>

    </main>
</template>

<script>

export default {
    name: "divider",
    data() {
        return {
            list: [
                {
                    language: "css",
                    content:`hr {
                        border: 0;
                        height: 5px;
                        background: orange;
                        background-image: linear-gradient(to right, red,green ,orange);
                    }`
                },{
                    language: "css",
                    content:`hr {
                        border: 0;
                        height: 15px;
                        border-radius:5px;
                        background-image: linear-gradient(to top left, rgba(22, 22, 22, 0), rgba(0, 123, 123, 0.75), rgba(0, 55, 55, 0));
                    }`
                },{
                    language: "css",
                    content:`hr {
                        border: 0;
                        border-bottom: 5px dashed #2c3e50;
                        background: orange;
                    }`
                },{
                    language: "css",
                    content:`hr {
                        height: 10px;
                        border: 1px solid #eeeeee;
                        border-radius:5px;
                        box-shadow: inset 0 10px 10px -6px rgba(196, 166, 166, 0.5);
                    }`
                },{
                    language: "css",
                    content:`hr {
                        border: 0;
                        height: 10px;
                        box-shadow: 0 0 10px 1px #ececec;
                        border-radius:5px;
                        overflow:hidden;
                        position: relative;
                        background: transparent;
                    }

                    hr:after {
                        position: absolute;
                        z-index:9;
                        width: 100%;
                        text-align: center;
                        content: "🍎";
                        font-size:24px;
                        color:red;
                    }`
                },{
                    language: "css",
                    content:`hr {
                        padding: 0;
                        margin:0;
                        border: none;
                        border-top: medium double green;
                        color: green;
                        height: 14px;
                        text-align: center;
                        background: transparent;
                        z-index: 3;
                        position: relative;
                        overflow: hidden;
                        box-sizing: border-box;
                        line-height: 14px;
                    }
                    /*safari和chrome表现有细微的差异*/
                    hr:after {
                        content: "96";
                        font-family: Arial;
                        position: relative;
                        top:-8px;
                        margin:0;
                        padding:0;
                        line-height: 14px;
                        font-size: 14px;
                    }`
                },
            ],
            dividerHtml:`/* index是编号.以下样式通用HTML代码，html不支持变更*/
             ace-divider-index <hr class="ace-divider-index"/>
            `,
            dividerHtmlConfig:{
                minLines:1,
                readOnly:true
            },
            refreshing:false,
            refreshIndex:-1,
            currentEditor:null
        }
    },
    methods: {
        save(editor){
            if(editor.id>=0){
                this.refresh(this.list[editor.id],editor.id)
            }
        },
        refresh(item,index){
            this.refreshIndex = index
            this.refreshing = true
            document.getElementById(`ace-${index}-container`).innerHTML =""
            let iframe = this.createIframe(`ace-divider-${index}`, item.content)
            this.writeHtmlTo(iframe, `ace-${index}-container`)
            setTimeout(()=>{
                this.refreshIndex = -1
                this.refreshing = false
            },500)
        },
        initDividerList() {
            this.list.forEach((item, index) => {
                let iframe = this.createIframe(`ace-divider-${index}`, item.content)
                this.writeHtmlTo(iframe, `ace-${index}-container`)
            })
        },
        createIframe(dividerCls, dividerStyle) {
            let iframe = document.createElement("iframe")
            let html = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width,initial-scale=1.0">
                        </head>
                        <body>
                              <hr class="${dividerCls}">${dividerCls}</hr>
                        </body>
                        <style type="text/css">
                            ${dividerStyle}
                        </style>
                        </html>`

            iframe.style.border = "1px solid transparent"
            iframe.style.width = "100%"
            iframe.style.height = "100%"
            //let src = 'data:text/html;charset=utf-8,' + encodeURI(html)
            //debugger
            iframe.srcdoc = html
            return iframe
        },
        writeHtmlTo(iframe, id) {
            document.getElementById(id).appendChild(iframe)
        }
    },
    mounted() {
        this.initDividerList()
        document.onkeydown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault()// 阻止默认事件
                return false
            }
        }
    }
}
</script>

<style scoped>
.main-divider {
    text-align: left;
    background: transparent;
    padding: 10px 10px;
    box-sizing: border-box;
}

.code-container {
    width: auto;
    box-sizing: border-box;
    margin: 10px 10px;
    border-radius: 3px;
    overflow: hidden;
}

.iframe-container {
    margin: 20px 10px 10px;
    border: 1px solid #2c3e50;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-radius: 3px;
}
.container-loading::before{
    content:"π";
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size:30px;
    text-align: center;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-16px;
    margin-top:-16px;
    color:red;
    -webkit-animation:myRotate 0.2s linear infinite;
    animation:myRotate 0.2s linear infinite;
}
.container-loading::after{
    position: absolute;
    content:"";
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background: rgba(0,0,0,0.2);

}
@-webkit-keyframes myRotate{
    0%{ -webkit-transform: rotate(0deg);}
    50%{ -webkit-transform: rotate(180deg);}
    100%{ -webkit-transform: rotate(360deg);}
}
@keyframes myRotate{
    0%{ -webkit-transform: rotate(0deg);}
    50%{ -webkit-transform: rotate(180deg);}
    100%{ -webkit-transform: rotate(360deg);}
}

.refresh {
    position: absolute;
    font-size: 12px;
    right: -13px;
    top: 49%;
    cursor: pointer;
    outline: none;
    border: none;
    z-index: 1;
    color: white;
    border:1px solid #2c3e50;
    background: lightseagreen;
    padding: 4px 2px;
    overflow: hidden;
    z-index:9;
    border-radius: 3px;;
}
.refresh:active{
    background: turquoise;
}

.refresh::after {
    content: "";
    z-index: -1;
    position: absolute;
    background: #595959;
    /* 核心代码：位置一步步调整 */
    top: -50%;
    left: 0%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-200%, 0, 0) rotate(35deg);
    /*  */
}

.refresh:hover {
    cursor: pointer;
}

.refresh:hover::after {
    transition: transform 0.5s ease-in-out;
    transform: translate3d(500%, 0, 0) rotate(35deg);
}

.ace-bth-section {
    display: flex;
    margin: 10px 0;
    flex-direction: row;
}

.flex1 {
    position: relative;
}
@media screen and (max-width: 900px) {
    .ace-bth-section{
        flex-direction: column;
    }
    .refresh{
        position: absolute;
        top:10px;
        right:10px;
        padding:2px 2px;
        margin:0;
        border:none;
    }
}
</style>