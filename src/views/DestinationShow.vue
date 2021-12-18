<template>
  <section v-if="destination">
    <h1>
      {{ destination.name }}
    </h1>
    <GoBack />
    <div class="flex flex-col lg:flex-row gap-4">
      <img
        class="lg:w-1/2 object-cover border-8 border-white drop-shadow-xl"
        :src="`/images/${destination.image}`"
        :alt="destination.name"
      />
      <p class="">
        {{ destination.description }}
      </p>
    </div>
  </section>
  <section>
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div>
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'ExperienceShow',
          params: { experienceSlug: experience.slug },
        }"
      >
        <ExperienceCard :experience="experience" />
      </router-link>
    </div>
  </section>
  <router-view></router-view>
</template> 

<script>
import sourceData from "./../data.json";
import ExperienceCard from "./../components/ExperienceCard.vue";
import GoBack from "./../components/GoBack.vue";

export default {
  components: {
    ExperienceCard,
    GoBack,
  },
  props: {
    id: { type: Number, required: true },
  },
  data() {
    return {
      destination: null,
    };
  },
  methods: {
    async initData() {
      const res = await fetch(
        `https://travel-dummy-api.netlify.app/${this.$route.params.slug}`
      );
      this.destination = await res.json();
    },
  },
  async created() {
    this.initData();
  },
};
</script>

<style>
</style>