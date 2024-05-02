<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import intersectImgUrl from "../assets/Intersect.svg";
</script>

<template>
  <div class="p-12">
    <Button class="py-6 bg-[#8362F2]">
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
      <h1 class="text-[48px]">Indonesia {{ ":flag" }}</h1>
      <div class="flex gap-2">
        <Badge class="rounded-xl bg-[#8DD4CC] text-xs">ID</Badge>
        <Badge class="rounded-xl bg-[#8DD4CC] text-xs">Indonesia</Badge>
        <Badge class="rounded-xl bg-[#8DD4CC] text-xs">
          Republik Indonesia
        </Badge>
      </div>

      <div class="flex gap-12 mt-12">
        <div class="relative px-8 py-6 shadow-md rounded w-full">
          <div>
            <label class="text-lg">Latlong</label>
            <div class="detail text-[#8362F2] text-5xl font-semibold mt-3">
              -5.0, 120.0
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
            <p>Capital: Jakarta</p>
            <p>Region: Asia</p>
            <p>Subregion: South-Eastern Asia</p>
          </div>
        </div>
      </div>

      <div class="flex gap-12 mt-12">
        <div class="relative px-8 py-6 w-full">
          <div>
            <label class="text-lg">Calling Code</label>
            <div class="detail text-[#8362F2] text-5xl font-semibold my-3">
              62
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
              IDR
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

<style lang=""></style>
