"use client";

import classNames from "classnames";
import { Minus } from "lucide-react";

export function Section(props: { num: number; title: string; className?: string }) {
  return (
    <a
      href={`#${props.title}`}
      className={classNames(
        "flex items-center justify-between md:h-[224px] h-[126px] py-[16px] md:py-[30px] sticky bg-inherit z-10",
        props.className
      )}
    >
      <h3 className="flex gap-8 px-5 md:px-[100px] items-center">
        <p className="text-[10px] md:text-[14px] font-semibold leading-[1.3em]">
          {String(props.num).padStart(2, "0")}
        </p>
        <p className="text-[24px] md:text-[40px] font-semibold leading-[1.3em]">
          {props.title}
        </p>
      </h3>
      <Minus size={24} className="mr-5 md:mr-[108px] " />
    </a>
  );
}
