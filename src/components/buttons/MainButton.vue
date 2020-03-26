<template>
  <button
    v-bind="$attrs"
    :class="[
      `btn btn--color-${color} btn--size-${size}`,
      {
        'btn--display-block': block,
        'btn--border-rounded': rounded
      }
    ]"
    v-on="listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "MainButton",
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: "primary",
      validator: value => {
        return [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning"
        ].includes(value);
      }
    },
    block: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "base",
      validator: value => {
        return ["small", "large", "base"].includes(value);
      }
    }
  },
  computed: {
    // Prepare the listeners for emit events
    listeners() {
      return {
        ...this.$listeners,
        click: event => this.$emit("click", event),
        blur: event => this.$emit("blur", event),
        mouseover: event => this.$emit("mouseover", event),
        mouseout: event => this.$emit("mouseout", event)
      };
    }
  }
};
</script>
