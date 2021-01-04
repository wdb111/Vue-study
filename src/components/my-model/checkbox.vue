<template>
    <div>
        <div>
            <input
                id="checkbox"
                type="checkbox"
                style="cursor:pointer"
                :checked="checkedValue"
                @change="$emit('change', $event.target.checked)"
            />
            <label for="checkbox" style="cursor:pointer;margin-left:10px">原生</label>
        </div>

        <br />
        <el-checkbox :value="checkedValue" @change="elChange"
            >备选项</el-checkbox
        >
    </div>
</template>
<script>
export default {
    model: {
        prop: "checkedValue",//默认value
        event: "change",//默认input
    },
    props: {
        checkedValue: Boolean,
    },
    methods: {
        elChange(val) {
            this.$emit("change", val);
        },
    },
};
</script>
