<template>
    <div>
        <input
            type="text"
            :value="textValue"
            @input="$emit('input', $event.target.value)"
        />
        <el-input type="text" :value="textValue" @input="elInput"></el-input>
    </div>
</template>
<script>
export default {
    model: {
        prop: "textValue",//默认value
        event: "input",//默认input
    },
    props: {
        textValue: String,
    },
    methods: {
        elInput(val) {
            this.$emit("input", val);
        },
    },
};
</script>
