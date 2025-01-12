"use client";
import classNames from "classnames";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const timerRef = useRef<NodeJS.Timeout>(null); // Store the timeout reference
  const [isRedirectCancelled, setIsRedirectCancelled] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading((value) => !value);
    }, 100);
  }, [setIsLoading]);

  useEffect(() => {
    if (!isRedirectCancelled) {
      if (isIntersecting) {
        console.log("Set a new timeout when the header is in view");
        // Set a new timeout when the header is in view
        timerRef.current = setTimeout(() => {
          console.log("redirect to #main");
          setIsRedirectCancelled(true);
          redirect("#main");
        }, 2000);
      } else if (timerRef.current) {
        // Clear the timeout if the header is no longer in view
        console.log("Clear the timeout if the header is no longer in view");
        setIsRedirectCancelled(true);
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }

    // Cleanup the timeout when the component unmounts
    return () => {
      console.log("Cleanup the timeout when the component unmounts");
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isIntersecting ,isRedirectCancelled]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
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
  }, [setIsIntersecting, ref]);

  return (
    <header
      ref={ref}
      className="h-screen flex flex-col justify-center items-center"
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
        개발자 <b className="font-extrabold">강민수</b> 입니다
      </p>
    </header>
  );
}
