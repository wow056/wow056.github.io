import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Minus } from "lucide-react";
import { Career, careers } from "./career";
import { projects } from "./projects";
import { skills } from "./skills";
import { educations } from "./education";

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
        <article id="Bio" className="flex flex-col min-h-screen bg-white">
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
        <article
          id="Career"
          className="flex flex-col min-h-screen bg-[#FAFAFA] "
        >
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
        <article
          id="Projects"
          className="flex flex-col min-h-screen bg-[#F3F3F3]"
        >
          <Section num={"03"} title={"Projects"} />
          <div className="grow gap-x-10 gap-y-[60px] items-stretch justify-center grid grid-cols-3 pl-[29.6875%] pr-[7.8125%] py-[120px]">
            {projects.map((value, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="aspect-w-3 aspect-h-2">
                  <Image
                    src={value.image_url}
                    alt={value.name + " 로고"}
                    width={240}
                    height={160}
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
                  <p className="text-[14px] text-[#444]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article id="Skills" className="flex flex-col bg-[#ECECEC]">
          <Section num={"04"} title={"Skills"} />
          <div className="grow gap-y-[60px] items-stretch justify-center flex flex-col pl-[29.6875%] pr-[7.8125%] py-[120px]">
            {skills.map((skillGroup, skillGroupIndex) => (
              <div
                key={skillGroupIndex}
                className="flex flex-col gap-6 items-stretch"
              >
                <h4 className="font-semibold text-[20px] leading-[1.5em]">
                  {skillGroup.name}
                </h4>
                <div className="grow gap-x-10 gap-y-[60px] items-stretch justify-center grid grid-cols-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col gap-5 bg-[#F0F0F0] px-6 py-7"
                    >
                      <div className="h-20 w-20 self-start">
                        <Image
                          src={skill.image_url}
                          alt={skill.name + " 로고"}
                          width={80}
                          height={80}
                          priority
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className="flex flex-col gap-5 items-stretch">
                        <h5 className="text-[16px] font-bold leading-[1.1em] pb-2 border-b-[1px] border-black">
                          {skill.name}
                        </h5>
                        <ul className="list-disc list-outside pl-5">
                          {skill.descriptions.map(
                            (description, descriptionIndex) => (
                              <li
                                key={descriptionIndex}
                                className="text-[14px] text-[#444] leading-[1.6em]"
                              >
                                {description}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
        <article id="Education" className="flex flex-col bg-[#DFDFDF]">
          <Section num={"05"} title={"Education"} />
          <div className="grow flex flex-col gap-7 items-stretch justify-center pl-[29.6875%] pr-[7.8125%] py-[120px]">
            <div className="flex flex-col justify-start items-start border-t border-b border-black divide-y divide-black">
              {educations.map((education, educationIndex) => (
                <div
                  className="flex flex-col w-full py-7 gap-4"
                  key={educationIndex}
                >
                  <h3 className="ml-[150px] text-[18px] font-bold">
                    {education.title}
                  </h3>
                  <div className="flex flex-col gap-[9px]">
                    {education.events.map((eventValue, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="flex flex-row w-full items-center leading-[1.1em] "
                      >
                        <div className="w-[150px] font-semibold text-[14px] leading-[1.1em] shrink-0 align-middle">
                          {getYearMonth(eventValue.date)}
                        </div>
                        <div className="text-[14px] leading-[1.6em] text-[#444444] align-middle">
                          {eventValue.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
      <footer
        className="self-stretch bg-[#666666] py-[30px] flex items-center justify-between text-white"
      >
        <a href="#Contact" className="flex gap-8 pl-[162px] items-center">
          <p className="text-[40px] font-semibold leading-[1.3em]">Contact</p>
          <address className="text-[18px] leading-[1.3em] not-italic">
            wow056@naver.com
          </address>
        </a>
        <ArrowRight className="mr-[108px]" size={24} />
      </footer>
    </div>
  );
}
function Section(props: { num: string; title: string }) {
  return (
    <a
      href={`#${props.title}`}
      className={
        "flex items-center justify-between py-[30px] sticky top-0 bg-inherit z-10"
      }
    >
      <h3 className="flex gap-8 px-[100px] items-center">
        <p className="text-[14px] font-semibold leading-[1.3em]">{props.num}</p>
        <p className="text-[40px] font-semibold leading-[1.3em]">
          {props.title}
        </p>
      </h3>
      <Minus size={24} className="ml-2 mr-[108px]" />
    </a>
  );
}

function getYearMonth(yearMonth: { year: number; month: number }): string {
  return (
    yearMonth.year.toLocaleString(undefined, {
      minimumIntegerDigits: 4,
      useGrouping: false,
    }) +
    ". " +
    yearMonth.month.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    ". "
  );
}

function getPeriodString(career: Career): string {
  let result: string = "";

  if (career.period.begin !== undefined) {
    const begin = career.period.begin;

    let beginString = getYearMonth(begin);
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
    let endString = getYearMonth(end);
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
