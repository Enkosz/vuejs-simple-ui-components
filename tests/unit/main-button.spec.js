import { shallowMount } from "@vue/test-utils";
import MainButton from "@/components/buttons/MainButton";

describe("MainButton", () => {
  it("has default structure and classes", () => {
    const wrapper = shallowMount(MainButton);

    expect(wrapper.is("button")).toBe(true);
    expect(wrapper.classes()).toContain("btn");
    expect(wrapper.classes()).toContain("btn--color-primary");
    expect(wrapper.classes()).toContain("btn--size-base");
    expect(wrapper.classes().length).toBe(3);
    expect(wrapper.attributes("href")).not.toBeDefined();
    expect(wrapper.attributes("role")).not.toBeDefined();
    expect(wrapper.attributes("disabled")).not.toBeDefined();
    expect(wrapper.attributes("aria-disabled")).not.toBeDefined();
    expect(wrapper.attributes("aria-pressed")).not.toBeDefined();
    expect(wrapper.attributes("autocomplete")).not.toBeDefined();
    expect(wrapper.attributes("tabindex")).not.toBeDefined();
  });

  it("has the listeners injected", () => {
    expect(typeof MainButton.computed.listeners).toBe("function");
  });

  it("renders default slot content", async () => {
    const wrapper = shallowMount(MainButton, {
      slots: {
        default: "<span>foobar</span>"
      }
    });

    expect(wrapper.is("button")).toBe(true);
    expect(wrapper.classes()).toContain("btn");
    expect(wrapper.classes()).toContain("btn--color-primary");
    expect(wrapper.classes()).toContain("btn--size-base");
    expect(wrapper.classes().length).toBe(3);
    expect(wrapper.find("span").exists()).toBe(true);
    expect(wrapper.text()).toBe("foobar");
  });

  it("applies color class", async () => {
    const wrapper = shallowMount(MainButton, {
      propsData: {
        color: "danger"
      }
    });

    expect(wrapper.classes()).toContain("btn");
    expect(wrapper.classes()).toContain("btn--color-danger");
    expect(wrapper.classes()).toContain("btn--size-base");
    expect(wrapper.classes().length).toBe(3);
  });

  it("applies block class", async () => {
    const wrapper = shallowMount(MainButton, {
      propsData: {
        block: true
      }
    });

    expect(wrapper.classes()).toContain("btn");
    expect(wrapper.classes()).toContain("btn--color-primary");
    expect(wrapper.classes()).toContain("btn--size-base");
    expect(wrapper.classes()).toContain("btn--display-block");
    expect(wrapper.classes().length).toBe(4);
  });

  it("applies size class", async () => {
    const wrapper = shallowMount(MainButton, {
      propsData: {
        size: "small"
      }
    });

    expect(wrapper.classes()).toContain("btn");
    expect(wrapper.classes()).toContain("btn--color-primary");
    expect(wrapper.classes()).toContain("btn--size-small");
    expect(wrapper.classes().length).toBe(3);
  });

  it("applies rounded class", async () => {
    const wrapper = shallowMount(MainButton, {
      propsData: {
        rounded: true
      }
    });

    expect(wrapper.classes()).toContain("btn");
    expect(wrapper.classes()).toContain("btn--color-primary");
    expect(wrapper.classes()).toContain("btn--size-base");
    expect(wrapper.classes()).toContain("btn--border-rounded");
    expect(wrapper.classes().length).toBe(4);
  });

  it("button has attribute disabled when disabled set", () => {
    const wrapper = shallowMount(MainButton, {
      attrs: {
        disabled: true
      }
    });

    expect(wrapper.classes()).toContain("btn");
    expect(wrapper.classes()).toContain("btn--color-primary");
    expect(wrapper.classes()).toContain("btn--size-base");
    expect(wrapper.classes().length).toBe(3);
    expect(wrapper.attributes("disabled")).toBeDefined();
  });

  it("should emit click event when clicked", () => {
    let called = 0;
    let evt = null;
    const wrapper = shallowMount(MainButton, {
      listeners: {
        click: e => {
          evt = e;
          called++;
        }
      }
    });

    expect(wrapper.is("button")).toBe(true);
    expect(called).toBe(0);
    expect(evt).toEqual(null);
    wrapper.find("button").trigger("click");
    expect(called).toBe(1);
    expect(evt).toBeInstanceOf(MouseEvent);
  });

  it("should not emit click event when clicked and disabled", async () => {
    let called = 0;
    const wrapper = shallowMount(MainButton, {
      propsData: {
        disabled: true
      },
      listeners: {
        click: () => {
          called++;
        }
      }
    });

    expect(wrapper.is("button")).toBe(true);
    expect(called).toBe(0);
    wrapper.find("button").trigger("click");
    expect(called).toBe(0);
  });
});
