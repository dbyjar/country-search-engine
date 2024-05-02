<script setup lang="ts">
import { ref } from "vue";
import { getListCountryByName } from "@/services/country";
import { Country } from "@/types/country";

const input = ref("");
const loading = ref(false);
const inputTimeouts = ref(undefined);
const showListCountries = ref(false);
const listCountries = ref<Country[]>([]);
const onInputKeyup = async () => {
  loading.value = true;

  clearTimeout(inputTimeouts.value);
  inputTimeouts.value = setTimeout(async () => {
    showListCountries.value = input.value?.length > 0;

    let res: any;
    if (input.value?.length > 0) {
      res = await getListCountryByName(input.value);

      if (res.data?.status !== 404) {
        listCountries.value = res?.data ?? ([] as Country[]);
      }
    }

    loading.value = false;
  }, 360);
};
</script>

<template>
  <div class="flex w-full min-h-screen justify-center items-center">
    <div class="wrapper flex flex-col gap-6 items-center">
      <h1 class="text-[72px]">Country</h1>
      <div class="input-wrapper relative">
        <div class="input relative">
          <input
            class="w-[700px] h-[60px] rounded-xl border text-[18px] p-6 relative"
            type="text"
            placeholder="Type any country name"
            v-model="input"
            @keyup="onInputKeyup"
          />
          <span class="absolute top-4 right-5">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.875 0.75C11.0299 0.75 13.0965 1.60602 14.6202 3.12976C16.144 4.65349 17 6.72012 17 8.875C17 10.8875 16.2625 12.7375 15.05 14.1625L15.3875 14.5H16.375L22.625 20.75L20.75 22.625L14.5 16.375V15.3875L14.1625 15.05C12.6882 16.3085 10.8134 16.9999 8.875 17C6.72012 17 4.65349 16.144 3.12976 14.6202C1.60602 13.0965 0.75 11.0299 0.75 8.875C0.75 6.72012 1.60602 4.65349 3.12976 3.12976C4.65349 1.60602 6.72012 0.75 8.875 0.75ZM8.875 3.25C5.75 3.25 3.25 5.75 3.25 8.875C3.25 12 5.75 14.5 8.875 14.5C12 14.5 14.5 12 14.5 8.875C14.5 5.75 12 3.25 8.875 3.25Z"
                fill="#C8C8C8"
              />
            </svg>
          </span>
        </div>
        <div
          v-if="showListCountries"
          class="absolute shadow-md w-full mt-5 rounded-xl text-[18px]"
        >
          <div class="py-2 px-5" v-if="loading">Loading ...</div>
          <div
            class="text-red-600 py-2 px-5"
            v-else-if="!loading && !listCountries.length"
          >
            Data Not Found
          </div>
          <div class="flex flex-col" v-if="listCountries.length">
            <RouterLink
              v-for="(country, index) in listCountries"
              :key="index"
              class="hover:bg-[#F4F4F4] py-2 px-5"
              :to="{
                name: 'detail',
                params: {
                  name: country.name?.common,
                },
              }"
            >
              {{ country.name?.common }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
