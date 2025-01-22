<template>
  <div>
    <input
      :placeholder="placeholder || ''"
      :value="modelValue"
      @input="handleInput"
      class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
    />
    <p class="text-red-500">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

interface Props {
  modelValue: string | null;
  type: string;
  placeholder?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const errorMessage = ref<string>("");

const handleInput = (event: Event) => {
  errorMessage.value = useInputValidator(
    props.type,
    (event.target as HTMLInputElement).value
  );
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

defineExpose({
  errorMessage,
});
</script>

<style scoped>
h1 {
  color: #3498db;
}
</style>