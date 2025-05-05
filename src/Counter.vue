<template>
    <h4 :class="textStyle">{{ number }}</h4>
    <div :class="btnsContainer">
        <button @click="_increaseValue" :class="increaseBtnStyle">+</button>
        <button @click="_decreaseValue" :class="decreaseBtnStyle">-</button>
        <button @click="_resetValue" :class="increaseBtnStyle">Reiniciar</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    initNumber: { type: Number, required: true },
    textStyle: { type: String },
    btnsContainer: { type: String },
    increaseBtnStyle: { type: String },
    decreaseBtnStyle: { type: String },
})

const emit = defineEmits<{
    currentValue: [value: number]
}>()

const number = ref(props.initNumber)

function _increaseValue() {
    number.value++
    emit('currentValue', number.value)
}
function _decreaseValue() {
    number.value--
    emit('currentValue', number.value)
}
function _resetValue() {
    number.value = props.initNumber
    emit('currentValue', number.value)
}

</script>