
export default function Home() {
  return (
    // items-center: 세로 기준 중앙 (행의 중앙), justify-items-center: 가로 중앙에 두는 것 (열의 중앙)
    <div className="grid grid-rows-[50px_1fr_20px] items-end justify-items-center min-h-screen gap-4 p-20 font-[family-name:var(--font-pretendard)]">
      <header className="self-stretch justify-self-stretch bg-yellow-200">
        여기는 header
      </header>
      <main className="bg-red-200 self-stretch">
        안녕 귀요미들?
      </main>
      <footer className="self-stretch justify-self-stretch bg-green-200">
        여기는 footer
      </footer>
    </div>
  );
}
