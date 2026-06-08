"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "0",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "group toast !rounded-none !border !border-border !bg-popover !px-3 !py-3 !font-sans !text-xs !text-popover-foreground !shadow-md !ring-1 !ring-foreground/10",
          title: "!text-xs !font-medium !text-foreground",
          description:
            "!mt-1 !font-mono !text-[0.68rem] !leading-relaxed !text-muted-foreground",
          icon: "!text-primary",
          closeButton:
            "!rounded-none !border-border !bg-background !text-muted-foreground hover:!bg-muted hover:!text-foreground",
          actionButton:
            "!rounded-none !bg-primary !px-2.5 !text-xs !font-medium !text-primary-foreground",
          cancelButton:
            "!rounded-none !border !border-border !bg-background !px-2.5 !text-xs !font-medium !text-foreground",
          success: "!border-primary/40",
          error: "!border-destructive/50",
          warning: "!border-muted-foreground/40",
          info: "!border-border",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
