<script setup lang="ts">
const emojis = ['🤩', '🥳', '😐', '🙁', '🙄', '🤬'];
const emojiWrapper = ref<HTMLDivElement>();
const myRate = ref<number>(0);
function onChange() {

}
</script>

<template lang="pug">
#app
  .emoji-wrapper.overflow-hidden.row-span-2.p-2(
    ref="emojiWrapper"
  )
    .emoji.w-18.h-18.flex.justify-center.items-center.snap-y.mb-2.text-7xl(
      v-for="emoji in emojis"
      :key="emoji"
    ) {{ emoji }}
  .text-center.leading-8 Your vote ?
  .rating.justify-center.items-center(@change="onChange")
    input.mask.mask-star-2.bg-green-500.w-10.h-10(
      v-for="item in 5"
      type="radio"
      name="rating"
      :key="item"
      :class="{active: item === myRate}"
      :value="6 - item"
      v-model="myRate"
    )

  .col-span-2.text-center.pt-1 Ranks
</template>
