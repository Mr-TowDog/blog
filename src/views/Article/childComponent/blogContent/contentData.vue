<template>
  <div v-if="conData !== ''">
    <v-md-preview :text="conData" ref="preview"></v-md-preview>
  </div>
</template>
<script>
export default {
  props: {
    conData: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      titles: [],
    };
  },
  mounted() {
    setTimeout(() => {
      //发送事件告诉目录内容已经渲染完成
      this.$bus.$emit("mul",this.$refs.preview)
    }, 100);
  },
  methods: {
  }
};
</script>
<style scoped>
</style>