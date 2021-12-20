<template>
  <div class="mt-2">
    <GoBack />
    <section>
      <h1>
        {{ destination.name }}
      </h1>
      <div class="flex flex-col lg:flex-row gap-7">
        <img
          class="
            lg:w-1/2
            object-cover
            border-8 border-white
            drop-shadow-md
            hover:scale-105 hover:drop-shadow-xl
            transition
          "
          :src="`/images/${destination.image}`"
          :alt="destination.name"
        />
        <p class="">
          {{ destination.description }}
        </p>
      </div>
    </section>
    <section class="mt-10">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="grid md:grid-cols-4 gap-5">
        <router-link
          class="hover:opacity-90"
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
    <section class="mt-10">
      <router-view></router-view>
    </section>
  </div>
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
      destination: this.about(),
    };
  },
  methods: {
    about() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
    // async initData() {
    //   const res = await fetch(
    //     `https://travel-dummy-api.netlify.app/${this.$route.params.slug}`
    //   );
    //   this.destination = await res.json();
    // },
  },
  async created() {
    // this.initData();
  },
};
</script>

<style>
</style>