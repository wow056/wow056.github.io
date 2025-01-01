export type Career = {
  period: {
  begin?: {
      year: number
      month: number
      day?: number
    },
    end?: {
      year: number
      month: number
      day?: number
    }
  },
  title: string,
  team?: string,
  position?: string,
  description?: string
}

export const careers: Career[] = [
  {
    period: {
      begin: {
        year: 2024,
        month: 1,
      },
    },
    title: "SK하이닉스",
    team: "Mobile SE",
    position: "TL",
    description: "UFS 스토리지 모바일 시스템 검증 엔지니어",
  },
  {
    period: {
      begin: {
        year: 2023,
        month: 6,
      },
      end: {
        year: 2023,
        month: 12,
      },
    },
    title: "프리랜서 외주",
    description: "의료용 안드로이드 앱 개발 및 유지보수",
  },
  {
    period: {
      begin: {
        year: 2022,
        month: 4,
      },
      end: {
        year: 2022,
        month: 11,
      },
    },
    title: "왓챠",
    team: "안드로이드팀",
    position: "팀원",
    description: "왓챠 Mobile 및 TV 앱 개발 및 유지보수",
  },
  {
    period: {
      begin: {
        year: 2020,
        month: 8,
      },
      end: {
        year: 2022,
        month: 4,
      },
    },
    title: "펜타시큐리티",
    team: "모바일개발팀",
    position: "팀원",
    description: "아이맘택시 승객 및 기사, 이동의자유 기사, 충전국밥, 버스닷 승객 및 기사, 케이콜 등 안드로이드 앱 개발 및 유지보수",
  },
  {
    period: {
      begin: {
        year: 2019,
        month: 6,
      },
      end: {
        year: 2019,
        month: 8,
      },
    },
    title: "SK하이닉스",
    team: "DRAM AE",
    position: "인턴",
    description: "DRAM 응용 성능 평가",
  },
  {
    period: {
      begin: {
        year: 2018,
        month: 6,
      },
      end: {
        year: 2018,
        month: 8,
      },
    },
    title: "비주얼캠프",
    team: "개발팀",
    position: "인턴",
    description: "Eye Tracking 응용 윈도우 프로그램 개발",
  },
  {
    period: {
      begin: {
        year: 2017,
        month: 6,
      },
      end: {
        year: 2017,
        month: 8,
      },
    },
    title: "주성엔지니어링",
    team: "개발팀",
    position: "인턴",
    description: "반도체 장비 개발 체험형 인턴",
  },
];
