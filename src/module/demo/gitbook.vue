<template>
    <main>
        <html-load :url="url"></html-load>
    </main>
</template>

<script>
export default {
    name: "gitbook",
    data(){
        return {
            url:"/gitbook/index.html"
        }
    },
    methods:{
        getHash(){
            // let hash = location.hash
            // let url = decodeURIComponent(hash)
            // if(url!="/gitbook"){
            //     this.url = url
            // }
        }
    },
    mounted(){
        //this.getHash()
    }
}
</script>

<style scoped>

</style>