import Link from "next/link";
import Image from "next/image";
import { Minus } from "lucide-react";
import { Career, careers } from "./career";
import { projects } from "./projects";

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
          <Section num={"01"} title={"Bio"} />
          <div className="grow flex flex-col gap-7 items-stretch justify-center pl-[29.6875%] pr-[7.8125%]">
            <div className="flex flex-col justify-start items-start gap-5">
              <h2 className="text-4xl font-semibold  leading-[1.3em]">
                웹 &amp; 안드로이드 앱 개발자
              </h2>
              <h1 className="text-[120px] font-semibold  leading-[1.1em]">
                강민수
              </h1>
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
        <article className="flex flex-col min-h-screen bg-[#FAFAFA]">
          <Section num={"02"} title={"Career"} />
          <div className="grow flex flex-col gap-7 items-stretch justify-center pl-[29.6875%] pr-[7.8125%] py-[120px]">
            <div className="flex flex-col justify-start items-start border-t border-b border-black divide-y divide-black">
              {careers.map((value, index) => (
                <div className="flex w-full py-7" key={index}>
                  <div className="w-[150px] font-semibold text-[14px] leading-[1.1em] shrink-0">
                    {getPeriodString(value)}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-[18px] leading-[1.1em]">
                      {value.title}
                    </div>
                    {(value.team !== undefined ||
                      value.position !== undefined) && (
                      <div className="mt-2 font-semibold text-[16px] leading-[1.1em]">
                        {[value.team, value.position]
                          .filter((value) => value !== undefined)
                          .join(" / ")}
                      </div>
                    )}

                    {value.description !== undefined && (
                      <div className="mt-4 text-[14px] leading-[1.6em] text-[#444444]">
                        {value.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article className="flex flex-col min-h-screen bg-[#F3F3F3]">
          <Section num={"03"} title={"Projects"} />
          <div className="grow gap-x-10 gap-y-[60px] items-stretch justify-center grid grid-cols-3 pl-[29.6875%] pr-[7.8125%]">
            {projects.map((value, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="aspect-w-3 aspect-h-2">
                  <Image
                    src={value.image_url}
                    alt={value.name + " 로고"}
                    width={240}
                    height={160}
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 text-[#111]">
                    <p className="text-[18px] font-bold leading-[1.1em]">
                      {value.name}
                    </p>
                    <p className="text-[16px] font-semibold leading-[1.1em]">
                      {value.company}
                    </p>
                  </div>
                  <p className="text-[14px] text-[#444]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
        
      </main>
      <footer className="self-stretch bg-green-200">여기는 footer</footer>
    </div>
  );
}
function Section(props: { num: string; title: string }) {
  return (
    <section className="flex items-center justify-between py-[30px]">
      <h3 className="flex gap-8 px-[100px] items-center">
        <p className="text-[14px] font-semibold leading-[1.3em]">{props.num}</p>
        <p className="text-[40px] font-semibold leading-[1.3em]">
          {props.title}
        </p>
      </h3>
      <Minus size={16} className="ml-2 mr-[108px]" />
    </section>
  );
}

function getPeriodString(career: Career): string {
  let result: string = "";

  if (career.period.begin !== undefined) {
    const begin = career.period.begin;
    let beginString =
      begin.year.toLocaleString(undefined, {
        minimumIntegerDigits: 4,
        useGrouping: false,
      }) +
      ". " +
      begin.month.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      ". ";
    if (begin.day != undefined) {
      beginString +=
        begin.day.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }) + ". ";
    }
    result += beginString;
  }
  result += " - ";
  if (career.period.end !== undefined) {
    const end = career.period.end;
    let endString =
      end.year.toLocaleString(undefined, {
        minimumIntegerDigits: 4,
        useGrouping: false,
      }) +
      ". " +
      end.month.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      ". ";
    if (end.day != undefined) {
      endString +=
        end.day.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }) + ". ";
    }
    result += endString;
  }

  return result;
}
