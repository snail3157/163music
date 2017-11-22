<template>
  <div id="song"  v-loading="loading">
    <div class="song-bg" :style="{backgroundImage: 'url(' + picUrl + ')'}"></div>
    <div class="m-song-wrap" >
      <div class="m-song-needle">
        <div class="needle-img"></div>
      </div>
      <div class="m-song-disc" >
        <div class="m-song-turn" >
          <div class="m-song-img">
            <img id="playimg" class="u-img play" :src="picUrl">
            <span class="m-song-plybtn" @click="play = !play"></span>
            <audio id="audio" autoplay="autoplay" v-bind:src="songurl" class="hidden" @ended="audioEnd()"></audio>
          </div>
        </div>
      </div>
      <div class="m-song-info">
          <div class="m-song-title">
            <h3>
              <span>{{song.name}}</span>
              <span>-</span>
              <span v-for="item in song.ar" class="m-song-author">{{item.name}}</span>
            </h3>
          </div>
          <div class="m-song-lyrics">
            <div v-if="lyrics">
              <p v-for="item in lyrics">
                {{item}}
              </p>
            </div>
            <div v-else>
              <p>
                还没有歌词哦~
              </p>
            </div>
            
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import {parseLyric} from '../assets/js/lyric'
export default {
  data(){
    return{
      play: true,
      loading: true,
      songurl: [],
      song: [],
      lyrics: [],
      picUrl: []
    }
  },
  created(){
    var songId = this.$route.params.id;
    this.initData(songId)
  },
  computed:{
  },
  methods:{
    async initData(payload){
        let res = await this.getData('queryMusicUrl', { 'id': payload });
        this.songurl = res.data.data[0].url
        let res1 = await this.getData('querySongDetail', { 'ids': payload });
        this.song = res1.data.songs[0]
        this.picUrl = res1.data.songs[0].al.picUrl
        let res2 = await this.getData('queryLyric', { 'id': payload });
        if(res2.data.lrc){
          this.lyrics = parseLyric(res2.data.lrc.lyric)
        }else{
          this.lyrics = ''
        }
        this.loading = false;
    },
    audioEnd(){
      this.play = !this.play;
    }
  },
  watch: {
    play() {
      var playimg = document.getElementById('playimg');
      playimg.classList.toggle('play');
      var audio = document.getElementById('audio');
      if(this.play){
        audio.play();
      }else{
        audio.pause();
      }
    }
  },
}
</script>
<style lang="less" scoped>
#song{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .song-bg{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-position: 55% 20%;
    background-size:auto 150%;
    background-repeat:no-repeat;
    opacity: 1;
    &::after {
      content: " ";
      background-color: rgba(0,0,0,.5);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  .m-song-wrap{
    position: relative;
    padding-top: .8rem;
    z-index: 2;
    .m-song-needle{
      position: absolute;
      top: 0;
      left: 45%;
      z-index: 4;
      text-align: center;
      .needle-img{
        width: 1rem;
        height: 3rem;
        background: url('../assets/needle-plus.png') no-repeat;
        background-size: contain;
      }
    }
    .m-song-disc{
      position: relative;
      width: 3.5rem;
      height: 3.5rem;
      margin: 0 auto;
      text-align: center;
      &::before {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 3;
        background: url('http://s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48') no-repeat;
        background-size: contain;
      }
      .m-song-img{
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        .u-img{
          width: 60%;
          &.play{
            -webkit-animation: circling 20s infinite linear;
            animation: circling 20s infinite linear;
            @keyframes circling{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}
            @keyframes circling{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}
          }
        }
        .m-song-plybtn{
          position: absolute;
          left: 50%;
          top: 50%;
          width: .5rem;
          height: .5rem;
          transform: translate(-50%,-50%);
          z-index: 10;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABJlBMVEUAAAAAAAD////l5eX///9iYmKDg4Pn5+f///9YWFj////09PT////4+Pjt7e3///////9oaGhBQUH////////////////CwsIaGhr///8xMTEkJCT////7+/vp6en///////////////+srKyoqKienp58fHz////y8vKTk5P///8EBAT////////////////V1dW3t7f////////////////////v7++jo6N9fX3///////+UlJT////s7Oz////Nzc3///////+RkZGPj495eXkTExP////////29vb////k5OTPz882Njb////////////c3Nz///////9ycnJsbGz///9dXV3////////Q0ND///9QUFD///////////////////9FeiN6AAAAYXRSTlNmAP3c+oWT3ueB9vA19ealRId5EQbuurpu83RxD/nh05dfAquooo+M7JtzaSolE+vMspJ3Wj7w6KSQj6ucKeXNxLWnmpmObVYd8t3axXZRSt7TvbKLideCeSzHnn4V3Nh6YarbPAAABlRJREFUeNrU14lWEmEYh/GXcdj3HQTZRCkS913UNE2zbLd9Oc/930Q2LmVpwPAC03MD/M5835n/IC6dkqHnzcVoZvdkLp2HfHruZDcTXWw+DyVdOilAt6uNjI8782Ua1W2XjTShtdDSmzRdlH6zFKq5bKQBTS5H57gqXJrP1tsb7kShkBPJFQoJ90a7np0vhblqLrrc8R7oQ4vVPZOLIp8mp8flzsanJ59FuMjcqxZdHVKFxvYDWK1lPQXpooInu4ZVYD/m6pAWNLn0DSvvekJ6KLHuxerb0qyrQwrQViV/oZzKSc/lpi6sgUrLdSN16MyWARBcOBWbnS4EAYytj67r1KGtqMUseaSvPCWLGr14u+pDZysmwFhc+i4+BmBWZgcATTXTFvO9qOS3qOlmShu68g7A6xa13F6A7yuq0ORnA9jZENU2dgDjc1IPGvMB4QNR7+AJ4IspQVObBjDmF+Wur6qxmdKAbpeBoEcGlCcIlLf7hx7lOzxOlYeaP+oTmmoYQFsGWhswGql+oMUMEInLgItHgEzRPvS43OHYVY+/fGwXGvIBkzKU6oAvZA8aywOPZEg9AvIxO9AXAZg4lKF1OAGBF71DX5jw5EyG2NkTMJ/3Co2ZcM8tQ819D8xYb9CVgA2nijSw0gs0tArBzk59aRBWQ91Dj30QjssIiofBd9wttFiGiTMZSWcTUC52B629Bg5lRB0Cr2tdQRvAfRlZ94FGN9AjA+oywupgHHWGzuRhTEbaGORnOkFTZYj4ZaT5I1BOdYBuAnEZcXFg89/QmAFtGXltMGL/ghZ9I7+g19fUV/wHtAJBvzggfxAqd0NXDPCII/KAsXIXNPXOIQd/efjvUndAmxB2xMH/zB+G5u3Qr2k4EMd0AOmvt0IrsCMOagcqt0FbJkyLg5oGs3ULNApecVReiP4NnTHALY7KDcbHv6BbDno1XTUGW39CWwa8F4flB6P1B3TRgQ/UeqSLN6GzAQd83f1dHAKzN6AfoCQOrARLN6Andr9GpiITT9/KwPLAye/QGATFTusAxsOCDKogxH6D7sOC2GkNq+B9GVALsP8LWgzAqdjJ4LJXCRlIpxAoXkOrtteT6yYmH8gg8kL1GroHU/1CoTSQBZ6CvSto0oRc/1DM7GNRLwdm8hK6DF5RgMI9j6jnheVLaBTWdaAwPy7KrUP0Alqbg4QWlPCU6JaAuZoFDcGaqEHh6RdRLQIhC/oBsppQzAXVN1UWlixoBjyqUIhozr8H3vyE1lYhpwnVnv8CpH9CZyAi2lAIPtK8pDPn0Cp8UoWqz/8zqJ5DGzCpCdWf/0lonEMzMK0J1Z//acicQ30wrgnVn/9x8LkkCWFRherPfxiSEgKvLlR//r0QkmWY14Xqz/88LEsTsqpQ/fm3RlQWoa4L1Z//OixKFNq6UP35vw9RycDGMKAYD3P9vEhlF9y6UP35d8OuvISELlR//hPwUqxh0oTqz781TbIKueFB4em4rb/Mq5IfMpRn0nOPIS+ADBUatvcz/w/0B/X2VgMACMNQ9AMnWOADKwT/QuahyZYcDcte7e146X9W+vFmWmEzOeOJGfjMCmWOEubMYw7no7wizHPHvMuMAMFIOo5IxsiOjJDLSOOM2cDYN44hxliMjGnL2OAOWMCgGgz84uBEDKDFIG8ORLhzLPO2Y5kK6PpMdJiBsR28nQkMOBEMJtTixISY4JUTZWPCgVXevesgCINhGG7dZPLEIg7GRRsMTsaoMTEOnmLUuBgn+e//JuTHGt0aKT3y3QIFpj6vO9ctnbnAmr9PIysefn0E0PfhkjW92HFtnQHULn5AAG9aISZGF3NaQYxVrInRrcVYBW4H5vkPEPIfuIV5UGXhClHT8Qv9oXQ/MckoTfb+wVTGqK8ZUl9+4mmUnpGj03pOmzlH5y/w5w6ZiAil+G9qA0KpkfWMTxKsJ6530wel3try9CwjSscg27BTDcw321gHjzyuEjj9IbwP1hPeDqHo2abP0pn5XMR/NhTB/fyo2gv3q0gh1JSkEHCrUuMSG1VxCdxDOtfR1ZDr4AGUwIUACi5JJZMyx1RHUgY3kIn0LBuFQk2EFlv7J3t0+id7JPi86wlJsfm9FUVbQrZR1LrPmQ0hKZfSXC7Fzr5LeD7uGoYBQBCGV56PS2g5ewGy+NkUNbjr9gAAAABJRU5ErkJggg==) 0 0 no-repeat;
          background-size: contain;
        }
      }
    }
    .m-song-info{
      position: relative;
      color: white;
      text-align: center;
      .m-song-title h3{
        width: 90%;
        margin: 0 auto;
        font-size: .20rem;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        .m-song-author{
          &::after{
            content: ' / ';
          }
          &:last-child::after{
            content: '';
          }
        }
      }
      .m-song-lyrics{
        height: 1.6rem;
        overflow-y: scroll;
        p{
          font-size: .14rem;
        }
      }
    }
  }
}
</style>
