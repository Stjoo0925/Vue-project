import swal from "sweetalert2";

export function NotImplemented() {
  swal.fire({
    title: "Error!",
    html: "미구현페이지입니다!",
    icon: "error",
    confirmButtonColor: "#ea0029",
    confirmButtonText: "확인",
  });
}

export function foodInfo() {
  swal.fire({
    title: "영양 정보",
    html: `<img src="https://www.kfckorea.com/nas/kfcimg/info/info_nutrition.png" alt="영양 정보 이미지" style="width:100%; height:99%;">`,
    confirmButtonText: "확인",
    confirmButtonColor: "#ea0029",
    customClass: {
      popup: "swal-modal-foodinfo",
    },
  });
}

export function noCountAlert() {
  swal.fire({
    title: "주문오류!!",
    text: "주문목록이 없습니다!",
    icon: "error",
    confirmButtonColor: "#ea0029",
    confirmButtonText: "확인",
  });
}
