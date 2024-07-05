<script setup lang="ts">

import TitleMenu from "@/components/TitleMenu.vue";

const baseUrl =
    'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';

    const getImgUrl = (i: number) => {
      return `${baseUrl}abstract0${i + 1}.jpg`;
    };


</script>

<template>
<TitleMenu title="ສິ້ນຄ້າ"/>
  <div  class="justify-start text-start">
    <div>
      <a-carousel arrows dots-class="slick-dots slick-thumb">
        <template #customPaging="props">
          <a>
            <img :src="getImgUrl(props.i)" />
          </a>
        </template>
        <div v-for="item in 4" :key="item">
          <img :src="getImgUrl(item - 1)" />
        </div>
      </a-carousel>
      <div class="text-center text-2xl mt-12">
        <h1>
          Beer
        </h1>
        <h1>12.000.00 LAK</h1>
        <a-input-number placeholder="ຂັ້ນຕຳ 12 ແກ້ວ" class="w-96" size="large"/>
        <div class="mt-2">
          <a-button class="w-96" type="primary" size="large">ຊື້ເລີຍ</a-button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
:deep(.slick-dots) {
  position: relative;
  height: auto;
}
:deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
:deep(.slick-arrow) {
  display: none !important;
}
:deep(.slick-thumb) {
  bottom: 0px;
}
:deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
:deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
:deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
