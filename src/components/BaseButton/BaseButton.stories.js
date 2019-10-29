import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import BaseButton from "./BaseButton";

export default {
  title: "BaseButton"
};

export const text = () => ({
  components: { BaseButton },
  template: '<base-button @click="action">Hello Button</base-button>',
  methods: { action: action("clicked") }
});

export const jsx = () => ({
  components: { BaseButton },
  render(h) {
    return <base-button onClick={this.action}>With JSX</base-button>;
  },
  methods: { action: linkTo("clicked") }
});

export const emoji = () => ({
  components: { BaseButton },
  template: '<base-button @click="action">😀 😎 👍 💯</base-button>',
  methods: { action: action("clicked") }
});
