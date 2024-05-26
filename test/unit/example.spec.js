import { createApp } from 'vue'; // Vue를 가져옵니다.
import HelloWorld from '@/components/HelloWorld.vue';
import { shallowMount } from '@vue/test-utils'; // 수정: @vue/test-utils에서 가져오도록 수정

// Vue 애플리케이션을 생성합니다.
const app = createApp(HelloWorld);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    // 애플리케이션을 이용하여 컴포넌트를 마운트합니다.
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      global: {
        // 애플리케이션을 전역으로 등록합니다.
        plugins: [app],
      },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
