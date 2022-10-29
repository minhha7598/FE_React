import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowingEdit, setIsShowingEdit] = useState(false);
  const [isShowingDetail, setIsShowingDetail] = useState(false);
  const [isShowingMail, setIsShowingMail] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }
  function editToggle() {
    setIsShowingEdit(!isShowingEdit);
  }
  function detailToggle() {
    setIsShowingDetail(!isShowingDetail);
  }
  function mailToggle() {
    setIsShowingMail(!isShowingMail);
  }
  return {
    isShowing,
    toggle,
    isShowingEdit,
    editToggle,
    isShowingDetail,
    detailToggle,
    isShowingMail,
    mailToggle,
  };
};

export default useModal;
