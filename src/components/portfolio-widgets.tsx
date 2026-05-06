"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const manilaClock = new Intl.DateTimeFormat("en-PH", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Manila",
});

type LiveTimeProps = {
  className?: string;
};


export function LiveTime({ className }: LiveTimeProps) {
  const [time, setTime] = React.useState(() => manilaClock.format(new Date()));

  React.useEffect(() => {
    const update = () => {
      setTime(manilaClock.format(new Date()));
    };

    update();
    const intervalId = window.setInterval(update, 30_000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <time
      className={cn("font-mono text-[0.65rem] tracking-[0.2em]", className)}
      dateTime={time}
      title="Current time in Metro Manila"
    >
      {time}
    </time>
  );
}
