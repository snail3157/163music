<template>
<div>
    <mhead></mhead>
    <div class="search-wrap">
        <div class="search-input">
            <input type="text" placeholder="搜索歌曲、割手、专辑" v-model="suggest" @keyup="getSearchSuggest">
        </div>
        <div class="s-suggest-list">
            <div class="items">
                <div class="items-title">
                    <h3>
                        搜索" {{suggest}} "
                    </h3>
                </div>
                <div class="item" v-for="item in searchSuggest['songs']" @click="toSong(item.id)">
                    <div class="item-main">
                        {{item.name+' '+item['artists'][0].name}}
                    </div>
                </div>
            </div>
        </div>
        <div class="s-history">

        </div>
    </div>
</div>
</template>
<script>
import mhead from '../components/mhead'
export default {
  data(){
    return{
        suggest: ''
    }
  },
  components:{
      mhead
  },
  created(){

  },
  methods:{
      getSearchSuggest(){
          this.$store.dispatch('getSearchSuggest',{'keywords':this.suggest,'limit':6,'type':1})
      },
      toSong(id){
          this.$router.push({ name: 'song', params: { 'id': id }})
      }
  },
  computed:{
      searchSuggest(){
          return this.$store.state.searchSuggest
      }
  }
}
</script>
<style lang="less" scoped>
.search-wrap{
    .search-input{
        width: 95%;
        margin: .2rem auto;
        box-sizing: border-box;
        border-radius: 30px;
        background: #ebecec;
        line-height: 2;
        input{
            width: 90%;
            margin-left: 5%;
            background: transparent;
            font-size: .15rem;
        }
    }
    .s-suggest-list h3{
        font-size: .16rem;
        font-weight: normal;
        margin-left: .2rem;
    }
    .item{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        list-style: none;
        color: black;
        background-color: #fcfcfd;
        .item-main{
            display: flex;
            justify-content: space-between;
            width: 95%;
            margin-left: 5%;
            border-bottom: 1px solid rgba(0,0,0,.1);
            padding: .1rem 0;
            font-size: .14rem;
        }
    }
}
</style>
