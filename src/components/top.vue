<template>
  <div>
      <div class="topbox">
          <img src="../assets/001.png" alt="" width="100px">
          <ul class="boxul">
              <!-- <li>111</li>
              <li>222</li>
              <li>333</li>
              <li>444</li> -->
              <li v-for="(item, index) in dataList" :key="index">{{item.name}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        dataList: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
    // .topbox {
    //     width: 80%;
    //     height: 100px;
    //     background-color: antiquewhite;
    //     display: flex;
    //     justify-content: space-between;
    //     margin: auto;
    // }
    // .boxul {
    //     display: flex;
    //     justify-content: space-between;
    // }
    // .boxul li {
    //     list-style: none;
    //     padding: 10px;
    //     background-color: #f99;
    //     margin: 0 10px;
    // }
    .topbox {
        width: 80%;
        height: 100px;
        background-color: antiquewhite;
        display: flex;
        justify-content: space-between;
        margin: auto;
        ul {
            display: flex;
            justify-content: space-between;
        }
        li {
            list-style: none;
            padding: 10px;
            background-color: #f99;
            margin: 0 10px;
            &:hover {
                background-color: greenyellow;
                cursor: no-drop;
            }
        }
    }
</style>