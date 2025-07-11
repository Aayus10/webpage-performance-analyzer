import { Bounce, toast } from "react-toastify";

export function extractNumericValue(input: string): number {
  const match = input.replace(/[^0-9.,]/g, "").replace(/,/g, "");
  return parseFloat(match);
}

export function showErrorMessage() {
  toast.error("The page you enetered does not exist. Please try again.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}
