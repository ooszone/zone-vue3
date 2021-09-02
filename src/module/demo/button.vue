<template>
    <main class="main-button">
        <label style="margin:10px 10px;display:inline-block">各种样式<b>按钮</b>集合[cmd/ctr+s保存并渲染] (请在支持H5的浏览器下体验)</label><br/>
        <ace style="margin:0 10px" :language="'html'" :config="btnHtmlConfig" v-model="btnHtml"></ace>
        <section v-for="(item,index) in list" class="ace-bth-section" :key="`${index}-ace-section`">
            <div class="flex1">
                <ace class="code-container"
                     :id="index"
                     @save="save"
                     :language="item.language.toLowerCase()"
                     v-model="item.content">
                </ace>
                <button class="refresh" @click="refresh(item,index)">刷新=></button>
            </div>
            <div :class="`iframe-container flex1 ${refreshing&&refreshIndex==index?'container-loading':''}`" :id="`ace-${index}-container`"></div>
        </section>

    </main>
</template>

<script>

export default {
    name: "buttonList",
    data() {
        return {
            list: [
                {
                    language: "css",
                    content:
                    `
                    /*拟物*/
                    button {
                        outline: none;
                        border: none;
                        z-index: 1;
                        position: relative;
                        color: white;
                        background: #999;
                        padding: 0.5em 1em;
                        border-radius: 3px;
                        border:1px solid #666;
                        box-shadow: 0 0 10px 3px #ccc;
                        user-select:none;
                    }

                    button::before {
                        content: "";
                        z-index: -1;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        border-radius: 3px;
                        background-color: #777;
                        transform-origin: center left;
                        transform: scaleY(0);
                        transition: transform 0.1s ease-in-out;
                    }
                    button:active {
                        box-shadow: none;
                        transform: scale(0.9);
                    }
                    button:active::before {
                        background: #333;
                    }
                    button:hover {
                        cursor: pointer;
                    }

                    button:hover::before {
                        transform-origin: center left;
                        transform: scaleY(1);
                    }`
                },
                {
                    language: "css",
                    content:
                     `/*扁平*/
                     button {
                      z-index: 1;
                      color: white;
                      background: #40a9ff;
                      outline: none;
                      border: none;
                      padding: 0.5em 1em;
                    }
                    button:hover {
                      cursor: pointer;
                      animation: jelly 0.5s;
                    }
                    button:active{
                      background:blue
                    }
                    @keyframes jelly {
                      0%,
                      100% {
                        transform: scale(1, 1);
                      }

                      25%,
                      75% {
                        transform: scale(0.9, 1.1);
                      }

                      50% {
                        transform: scale(1.1, 0.9);
                      }
                    }`
                },
                {
                    language: "css",
                    content: `button {
                      position: relative;
                      z-index: 1;
                      border: none;
                      outline: none;
                      padding: 0.5em 1em;
                      color: white;
                      background-color: orange;
                    }
                    button:hover {
                      cursor: pointer;
                    }
                    button::before {
                      content: "";
                      position: absolute;
                      z-index: -1;
                      top: 0;
                      left: 0;
                      bottom: 0;
                      right: 0;
                      border: 4px solid orange;
                      transform: scale(1);
                      transform-origin: center;
                    }
                    button:hover::before {
                      transition: all 0.75s ease-out;
                      border: 1px solid#e6f7ff;
                      transform: scale(1.25);
                      opacity: 0;
                    }`
                },
                {
                    language: "css",
                    content: `button {
                      outline: none;
                      border: none;
                      z-index: 1;
                      position: relative;
                      color: white;
                      background: red;
                      padding: 0.5em 1em;
                      overflow: hidden;
                    }

                    button::after {
                      content: "";
                      z-index: -1;
                      position: absolute;
                      background: darkred;
                      /* 核心代码：位置一步步调整 */
                      top: -50%;
                      left: 0%;
                      bottom: -50%;
                      width: 1.25em;
                      transform: translate3d(-200%, 0, 0) rotate(35deg);
                      /*  */
                    }
                    button:hover {
                      cursor: pointer;
                    }

                    button:hover::after {
                      transition: transform 0.5s ease-in-out;
                      transform: translate3d(500%, 0, 0) rotate(35deg);
                    }`
                },
                {
                    language: "css",
                    content: `button {
                      outline: none;
                      border: none;
                      cursor: pointer;
                      color: white;
                      position: relative;
                      padding: 0.5em 1em;
                      background-color: blue;
                      z-index: 1;
                      overflow: hidden;
                    }
                    button::before {
                      z-index: -1;
                      content: "";
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      width: 1em;
                      height: 1em;
                      border-radius: 50%;
                      background-color: #9254de;
                      transform-origin: center;
                      transform: translate3d(-50%, -50%, 0) scale(0, 0);
                      transition: transform 0.45s ease-in-out;
                    }

                    button:hover::before {
                      transform: translate3d(-50%, -50%, 0) scale(15, 15);
                    }`
                }
            ],
            btnHtml:`/* index是编号.以下样式通用HTML代码，html不支持变更*/
            <button class="ace-btn-index">ace-btn-index</button>
            `,
            btnHtmlConfig:{
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
            let iframe = this.createIframe(`ace-btn-${index}`, item.content)
            this.writeHtmlTo(iframe, `ace-${index}-container`)
            setTimeout(()=>{
                this.refreshIndex = -1
                this.refreshing = false
            },500)
        },
        initBtnList() {
            this.list.forEach((item, index) => {
                let iframe = this.createIframe(`ace-btn-${index}`, item.content)
                this.writeHtmlTo(iframe, `ace-${index}-container`)
            })
        },
        createIframe(btnCls, btnStyle) {
            let iframe = document.createElement("iframe")
            let html = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width,initial-scale=1.0">
                        </head>
                        <body>
                              <button class="${btnCls}">${btnCls}</button>
                        </body>
                        <style type="text/css">
                            ${btnStyle}
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
        this.initBtnList()
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
.main-button {
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