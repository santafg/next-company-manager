import events from "@/constants/event";
import Emitter from "@/services/events/emitter";

export const toastError = (message: string) => {
  Emitter.emit(events.showNotification, {
    message: message || "Something went wrong",
    options: { variant: "error" },
  });
};

export const toastSucess = (message: string) => {
  Emitter.emit(events.showNotification, {
    message: message || "Success",
    options: { variant: "success" },
  });
};
