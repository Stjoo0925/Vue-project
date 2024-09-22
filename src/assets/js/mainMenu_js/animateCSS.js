import { computed, ref, watch } from "vue";
import "animate.css"; // 애니메이션 CSS 라이브러리를 가져옵니다.

// 애니메이션 상태를 관리하기 위한 반응형 참조입니다.
export const animateLength = ref(false);

// 애니메이션 클래스를 계산하여 반환하는 computed 속성입니다.
export const animationClasses = computed(() => ({
  animate__animated: true, // 기본적으로 애니메이션을 활성화
  animate__rubberBand: animateLength.value, // animateLength 값에 따라 rubberBand 애니메이션 적용
}));

// 스토어의 선택된 아이템 수의 변화를 감시하고 애니메이션 상태를 업데이트하는 함수입니다.
export const setupAnimationWatch = (store) => {
  watch(
    () => store.selectedItems.length, // 선택된 아이템의 수를 감시
    (newLength, oldLength) => {
      if (newLength !== oldLength) {
        // 새 길이와 이전 길이가 다를 경우
        animateLength.value = true; // 애니메이션 상태를 활성화
        setTimeout(() => {
          animateLength.value = false; // 1초 후에 애니메이션 상태를 비활성화
        }, 1000);
      }
    }
  );
};
