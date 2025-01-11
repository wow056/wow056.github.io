export type Project = {
  image_url: string,
  name: string,
  company?: string,
  description: string,
}

export const projects: Project[] = [
  {
    name: "이쪽술집",
    company: "사이드 프로젝트 팀 퇴근길",
    description: "퀴어 프렌들리 장소 검색 및 추천 웹사이트",
    image_url: "/itzbar.svg"
  },
  {
    name: "의료용 안드로이드 앱 개발 외주",
    company: "스타트업 외주",
    description: "인지행동치료용 안드로이드 앱 개발",
    image_url: "/medical.svg"
  },
  {
    name: "모바일 및 TV 앱 리디자인",
    company: "왓챠",
    description: "버튼 등 UI 공통 요소를 관리하기 쉽게",
    image_url: "/watcha.svg"
  },
  {
    name: "안드로이드 앱 신규 개발",
    company: "펜타시큐리티시스템",
    description: "하나의 모빌리티 앱을 지역별로 다른 디자인, 다른 정책을 이용해 확장하는 프로젝트",
    image_url: "/mobility_app.svg"
  },
  {
    name: "CI/CD 도입",
    company: "펜타시큐리티시스템",
    description: "반복 작업과 휴먼 에러 방지를 위한",
    image_url: "/penta.svg"
  },
  {
    name: "앱 유지보수 및 리팩터링",
    company: "펜타시큐리티시스템",
    description: "기존 프로토타입 제품을 상용화하는 프로젝트",
    image_url: "/penta.svg"
  },
  {
    name: "DRAM 성능 영향 평가",
    company: "SK하이닉스",
    description: "DRAM 응용 기술 연구 검증 인턴",
    image_url: "/hynix.svg"
  },
  {
    name: "장애인 ATM 보조 소프트웨어 개발",
    company: "비주얼캠프",
    description: "Eye Tracking 기술을 개발 및 공급하는 스타트업 여름 인턴",
    image_url: "/visualcamp.svg"
  },
];
