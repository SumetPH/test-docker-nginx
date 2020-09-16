<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h5>คำสั่งซื้อ</h5>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <ul class="tabs" ref="tabs" style="display: flex;">
            <li class="tab col s3">
              <a href="#test1">รอการชำระ</a>
            </li>
            <li class="tab col s3">
              <a href="#test2">รอการจัดส่ง</a>
            </li>
            <li class="tab col s3">
              <a href="#test3">จัดส่งแล้ว</a>
            </li>
          </ul>
        </div>
        <div id="test1" class="col s12">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>วันที่สั่งซื้อ</th>
                <th>ราคา</th>
              </tr>
            </thead>
          </table>
        </div>
        <div id="test2" class="col s12">Test 2</div>
        <div id="test3" class="col s12">Test 3</div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "./Layout";
export default {
  components: {
    Layout,
  },
  mounted() {
    window.M.Tabs.init(this.$refs.tabs);
  },
};
</script>
