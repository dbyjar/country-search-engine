<script setup lang="ts">
import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  getCountryByFullname,
  getTheCallingCode,
  getTheCurrencies,
} from "@/services/country";
import { Country } from "@/types/country";

import intersectImgUrl from "../assets/Intersect.svg";

const location = useRoute();
const country = ref<Country>();
const totalCallingCode = ref<number>(0);
const totalCurrencies = ref<number>(0);

onBeforeMount(async () => {
  if (location.params.name) {
    const res = await getCountryByFullname(location.params.name);
    country.value = res?.data[0] ?? {};

    // totalCallingCode.value = await getTheCallingCode(callingCode.value)
    // totalCurrencies.value = await getTheCurrencies(callingCode.value)

    const r = await getTheCallingCode(callingCode.value);
    const ds = await getTheCurrencies(callingCode.value);

    console.log({
      r,
      ds,
    });
  }
});

const currency = computed(() => {
  const key = Object.keys(country?.value?.currencies ?? {});
  return key[0];
});

const callingCode = computed(() => {
  const idd = country?.value?.idd;
  const suffixesToString = idd?.suffixes.join("");

  return idd?.root + suffixesToString;
});
</script>

<template>
  <div class="p-12">
    <Button class="py-6 bg-[#8362F2]" @click="$router.push('/')">
      <span class="me-2">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L1 8L8 15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 8H17"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      <span>Back To Home</span>
    </Button>

    <div class="content mt-12">
      <h1 class="text-[48px]">
        {{ country?.name?.common }} {{ country?.flag }}
      </h1>
      <div class="flex gap-2">
        <Badge
          class="rounded-xl bg-[#8DD4CC] text-xs"
          v-for="(alt, index) in country?.altSpellings"
          :key="index"
        >
          {{ alt }}
        </Badge>
      </div>

      <div class="flex gap-12 mt-12">
        <div class="relative px-8 py-6 shadow-md rounded w-full">
          <div>
            <label class="text-lg">Latlong</label>
            <div class="detail text-[#8362F2] text-5xl font-semibold mt-3">
              <span v-for="(latlng, index) in country?.latlng" :key="index">
                {{
                  `${latlng}${index < country?.latlng?.length - 1 ? ", " : ""}`
                }}
              </span>
            </div>
          </div>

          <img
            class="absolute bottom-0 right-0"
            :src="intersectImgUrl"
            alt="intersectImg"
          />
        </div>
        <div class="relative px-8 py-6 shadow-md rounded w-full">
          <div>
            <div>
              <label for="capital">Capital: </label>
              <span v-for="(capital, index) in country?.capital" :key="index">
                {{ capital }}
              </span>
            </div>
            <div>
              <label for="region">Region: </label>
              <span v-for="(region, index) in country?.region" :key="index">
                {{ region }}
              </span>
            </div>
            <div>
              <label for="subregion">Subregion: </label>
              <span
                v-for="(subregion, index) in country?.subregion"
                :key="index"
              >
                {{ subregion }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-12 mt-12">
        <div class="relative px-8 py-6 w-full">
          <div>
            <label class="text-lg">Calling Code</label>
            <div class="detail text-[#8362F2] text-5xl font-semibold my-3">
              {{ callingCode }}
            </div>
            <span>
              <a href="#" class="text-[#8362F2] underline hover:pointer">
                1 country
              </a>
              with this calling code
            </span>
          </div>
        </div>
        <div class="relative px-8 py-6 w-full">
          <div>
            <label class="text-lg">Currency</label>
            <div class="detail text-[#8362F2] text-5xl font-semibold my-3">
              {{ currency }}
            </div>
            <span>
              <a href="#" class="text-[#8362F2] underline hover:pointer">
                1 country
              </a>
              with this currency
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
