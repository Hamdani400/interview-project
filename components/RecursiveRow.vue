<template>
  <div>
    <template v-for="(value, key) in data" :key="key">
      <!-- levelClass, -->
      <div 
        :class="[ 
          'w-full grid', 
          isObject(value) ? 'grid-cols-[100%]' : 'grid-cols-[30%,70%]', 
          'border-t border-l border-b border-gray-300' 
        ]" 
        :style="{ marginLeft: `${props.level * 20}px` }"
      >
        <div :class="{ 'bg-[#94a3b8]': isObject(value) }">
          <p>{{ key }}</p>
        </div>
        <div class="border-l border-gray-300" v-if="!isObject(value)">
          <p>{{ value }}</p>
        </div>
      </div>
      <recursive-row v-if="isObject(value)" :level="nextLevel" :data="value" />
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: Object;
  level: number;
}
const props = defineProps<Props>();


const nextLevel = props.level + 1;

const isObject = (value: any): value is Record<string, any> =>
  typeof value === "object" && !Array.isArray(value);
</script>