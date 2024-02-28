import Session from "./component/Session"; 
import Header from "./component/Header";


export default function Home() {
  return (
    <main className="bg-neutral-900 h-[100vh]">
      <Header>
        <Session />
      </Header>
    </main>
  );
}
