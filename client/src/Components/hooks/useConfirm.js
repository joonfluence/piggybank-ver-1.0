const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      alert("삭제되었습니다");
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

export default useConfirm;
