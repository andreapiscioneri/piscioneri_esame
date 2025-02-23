<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const projects = ref([
  { id: 1, title: "Project 1", image: "/images/1.jpg" },
  { id: 2, title: "Project 2", image: "/images/2.jpg" },
  { id: 3, title: "Project 3", image: "/images/3.jpg" },
]);

const isVisible = ref(false);

const handleScroll = () => {
  const element = document.querySelector(".carousel-container");
  if (element) {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      isVisible.value = true;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
</script>
<template>
    <div class="carousel-container transition-opacity duration-1000 ease-out"
         :class="{'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible}">
      
      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :pagination="{ clickable: true }"
        class="w-full max-w-4xl mx-auto"
      >
        <SwiperSlide v-for="project in projects" :key="project.id">
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover rounded-lg">
            <h3 class="text-xl font-bold mt-4">{{ project.title }}</h3>
          </div>
        </SwiperSlide>
      </Swiper>
  
    </div>
  </template>
<style scoped>
.carousel-container {
  max-width: 1000px;
  margin: 100px auto;
}
</style>
