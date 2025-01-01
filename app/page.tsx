import Link from "next/link";
import Image from "next/image";
import { Minus } from "lucide-react";

export default function Home() {
  return (
    // items-center: 세로 기준 중앙 (행의 중앙), justify-items-center: 가로 중앙에 두는 것 (열의 중앙)
    <div className="grid items-end justify-items-stretch min-h-screen font-[family-name:var(--font-pretendard)] tracking-[-0.03em]">
      <header id="sectionPin">
        <div className="pin-wrap-sticky">
          <div className="pin-wrap h-screen flex justify-start items-center">
            <p className="font-semibold text-[40vh] leading-[110%] px-[100px] text-nowrap">
              Developer
            </p>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-stretch">
        <article className="flex flex-col min-h-screen">
          <section className="flex items-center justify-between py-[30px]">
            <h1 className="flex gap-8 px-[100px] items-center">
              <p className="text-[14px] font-semibold leading-[1.3em]">01</p>
              <p className="text-[40px] font-semibold leading-[1.3em]">Bio</p>
            </h1>
            <Minus size={16} className="ml-2 mr-[108px]" />
          </section>
          <div className="grow flex flex-col gap-7 items-stretch justify-center pl-[29.6875%] pr-[7.8125%]">
            <div className="flex flex-col justify-start items-start gap-5">
              <p className="text-4xl font-semibold  leading-[1.3em]">
                웹 &amp; 안드로이드 앱 개발자
              </p>
              <p className="text-[120px] font-semibold  leading-[1.1em]">
                강민수
              </p>
              <p className="text-lg text-[#444]  leading-[1.6em]">
                <b>안드로이드 앱</b> 개발자로 모빌리티 서비스 및 OTT 서비스
                기업에서 근무했습니다.
                <br />
                대학 졸업 전, 뜻이 맞는 동료들과 매일 200명 이상 방문하는{" "}
                <b>웹 서비스</b>를 개발하고 운영했습니다.
                <br />
                지금은 분당의 한 반도체 회사에서 안드로이드 시스템{" "}
                <b>검증 엔지니어</b>로 근무하고 있습니다.
              </p>
            </div>
            <div className="flex justify-start items-start gap-5">
              <Link href={"https://github.com/wow056"}>
                <Image
                  src="/github.svg"
                  alt="Github logo"
                  width={60}
                  height={60}
                  priority
                />
              </Link>
              <Link href={"https://www.linkedin.com/in/minsu-kang-0821a2140/"}>
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn logo"
                  width={60}
                  height={60}
                  priority
                />
              </Link>
            </div>
          </div>
        </article>
        <article className="flex flex-col min-h-screen">
          <section className="flex items-center justify-between py-[30px]">
            <h1 className="flex gap-8 px-[100px] items-center">
              <p className="text-[14px] font-semibold leading-[1.3em]">02</p>
              <p className="text-[40px] font-semibold leading-[1.3em]">
                Career
              </p>
            </h1>
            <Minus size={16} className="ml-2 mr-[108px]" />
          </section>
          <div className="grow flex flex-col gap-7 items-stretch justify-center pl-[29.6875%] pr-[7.8125%]">
            웅야쿵야
          </div>
        </article>
      </main>
      <footer className="self-stretch bg-green-200">여기는 footer</footer>
    </div>
  );
}
