"use client";
import classNames from "classnames";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const isIntersecting = useRef(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading((value) => !value);
    }, 100);
  }, [setIsLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("isintersecting: ", isIntersecting.current);
      if (isIntersecting.current) {
        console.log("redirect to #main");
        redirect("#main");
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting.current = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    const currentRef = ref.current;

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return (
    <header
      ref={ref}
      className="h-screen flex flex-col justify-center px-5 items-start md:items-center"
    >
      <p
        className={classNames(
          "transition duration-[500ms] font-bold text-[60px] leading-[1.6em] text-[#111111]",
          isLoading ? "text-[#111111]" : "text-[#ECECEC]"
        )}
      >
        새로운 것을
      </p>
      <p
        className={classNames(
          "transition delay-[500ms] duration-[500ms]  font-bold text-[60px] leading-[1.6em] text-[#111111]",
          isLoading ? "text-[#111111]" : "text-[#ECECEC]"
        )}
      >
        공부하고
      </p>
      <p
        className={classNames(
          "transition delay-[1000ms] duration-[500ms]  font-bold text-[60px] leading-[1.6em] text-[#111111]",
          isLoading ? "text-[#111111]" : "text-[#ECECEC]"
        )}
      >
        적용하는
      </p>
      <p className="font-normal text-[40px] leading-[1.4em] mt-10">
        개발자 <br className="inline md:hidden" />
        <b className="font-extrabold">강민수</b> 입니다
      </p>
    </header>
  );
}
