<template>
  <div>
    <div class="row">
      <div class="col xl3">
        <AsideFilter></AsideFilter>
      </div>
      <div class="col xl9">
        <Content></Content>
      </div>
    </div>
  </div>
</template>

<script>
import AsideFilter from "./ProductComponent/AsideFilter";
import Content from "./ProductComponent/Content";
export default {
  components: {
    AsideFilter,
    Content,
  },
  mounted() {
    this.axios.get("/api/v1/product").then((res) => {
      console.log(res, "mountedProduct");
      this.$store.commit("setProductsAll", res.data);
    });
  },
};
</script>
