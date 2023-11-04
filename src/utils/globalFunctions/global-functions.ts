import { ToastType } from "@/constants";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export function updateToast(
  id: string,
  message: string,
  {
    toastType,
    isLoading = false,
    duration = 2000,
  }: { toastType?: ToastType; isLoading?: boolean; duration?: number }
) {
  toast.update(id, {
    render: message,
    isLoading: isLoading,
    type: toastType, // This should be correct
    autoClose: duration,
  });
}

export function getUniqueID({ prefix = "" }) {
  return `${prefix}${uuidv4()}`;
}

export function generateToast({
  message,
  toastType = ToastType.default,
  duration = 3000,
  isLoading = false,
}: {
  message: string;
  toastType?: ToastType;
  duration?: number | false;
  isLoading?: boolean;
}): string {
  const id = getUniqueID({ prefix: "toast" });
  toast(message, {
    toastId: id,
    type: toastType,
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    isLoading: isLoading,
  });
  return id;
}
