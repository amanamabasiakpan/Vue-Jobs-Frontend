<script setup>
import { defineProps, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
	job: Object,
});

const { type, title, description, salary, location, id } = props.job;

const showFullDescription = ref(false);
const toggleDescription = () => {
	showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
	return showFullDescription.value
		? description
		: description.slice(0, 100) + '...';
});
</script>

<template>
	<div class="p-4">
		<div class="mb-6">
			<div class="text-gray-600 my-2">{{ type }}</div>
			<h3 class="text-xl font-bold">{{ title }}</h3>
		</div>

		<div class="mb-5">
			{{ truncatedDescription }}
			<span
				class="text-blue-500 cursor-pointer"
				@click="toggleDescription">
				{{ showFullDescription ? 'Less' : 'More' }}
			</span>
		</div>

		<h3 class="text-green-500 mb-2">{{ salary }}/ Year</h3>

		<div class="border border-gray-100 mb-5"></div>

		<div class="flex flex-col lg:flex-row justify-between mb-4">
			<div class="text-orange-700 mb-3">
				<i class="pi pi-map-marker"></i>
				{{ location }}
			</div>
			<RouterLink
				:to="`/job/${id}`"
				class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
				Read More
			</RouterLink>
		</div>
	</div>
</template>
