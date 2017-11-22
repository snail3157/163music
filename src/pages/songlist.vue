<template>
<div>
  <header>
      <section class="list-head">
        <div class="photo-left">
            <img :src="songlist.playlist.coverImgUrl" />
            <div class="lsthd_icon"><!-- react-text: 2834 -->歌单<!-- /react-text --></div>
            <span>{{songlist.playlist.playCount | formatCount}}</span>
        </div>
        <div class="text-left">
            <h3>
                {{songlist.playlist.name}}
            </h3>
            <div class="author">
                <img :src="songlist.playlist.creator.avatarUrl" alt="">
                <span>{{songlist.playlist.creator.nickname}}</span>
            </div>
        </div>
      </section>
  </header>
  <p class="slits-title">歌曲列表</p>
  <slist :listId = "listId" type="songlist"></slist>
</div>
</template>
<<script>
import slist from "../components/slist";
export default {
  components:{
      slist
  },
  data(){
    return{
        listId: '',
        type: 'suggest'
    }
  },
  created(){
      this.listId = this.$route.params.id
      this.$store.dispatch('getsonglistDetail',this.listId)
  },
  computed:{
      songlist(){
          return this.$store.state.songlistDetail;
      }
  }
}
</script>
<style lang="less" scoped>
@import url('../style/common.less');
header{
    margin: 0;
    padding: 0;
    background: linear-gradient(#363636, #8a8a8a);
    padding: 0.2rem 0;
}
.list-head{
    width: 92%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    .photo-left{
        width: 50%;
        position: relative;
        img{
            width: 100%; 
        }
        .lsthd_icon {
            position: absolute;
            z-index: 3;
            top: .15rem;
            left: 0;
            padding: 0 .12rem;
            height: .18rem;
            color: #fff;
            font-size: .14rem;
            text-align: center;
            // line-height: .17rem;
            background-color: @mcolor;
            border-top-right-radius: .17rem;
            border-bottom-right-radius: .17rem;
        }
        span{
            position: absolute;
            top: .05rem;
            right: .05rem;
            font-size: .12rem;
            padding-left: .13rem;
            color: #fff;
            background-position: 0;
            background-repeat: no-repeat;
            background-size: .11rem .10rem;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==);
        }
        &::after{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: .2rem;
            z-index: 2;
            background-image: linear-gradient(180deg,rgba(0,0,0,.2),transparent);
        }
    }
    .text-left{
        margin-left: 6%;
        float: right;
        h3{
            color: white;
            margin-top: 0;
            font-size: .17rem;
        }
        .author{
            color: #fff;
            img{
                width: .28rem;
                border-radius: 50%;
                vertical-align: middle;
            }
            span{
                font-size: .16rem;
            }
        }
    }
}
.slits-title{
        margin: 0;
        line-height: .25rem;
        padding-left: .1rem; 
        font-size: .13rem;
        background-color: #eeeff0;
    }
</style>
