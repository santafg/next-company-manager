"use client";

import events from "@/constants/event";
import Emitter from "@/services/events/emitter";
import { OptionsObject, SnackbarMessage, useSnackbar } from "notistack";
import { useCallback, useEffect } from "react";

const EventWrapper = ({ children }: { children: React.ReactNode }) => {
  const { enqueueSnackbar } = useSnackbar();
  const showNotifications = useCallback(
    (data: { message: SnackbarMessage; options?: OptionsObject }) => {
      enqueueSnackbar(data.message, data.options);
    },
    [enqueueSnackbar]
  );
  useEffect(() => {
    Emitter.on(events.showNotification, showNotifications);
    return () => {
      Emitter.off(events.showNotification, showNotifications);
    };
  }, [enqueueSnackbar, showNotifications]);
  return <>{children}</>;
};

export default EventWrapper;
