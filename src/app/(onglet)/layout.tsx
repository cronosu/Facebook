import Header from "../component/Header";
import Session from "../component/Session";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Header>
      <Session />
    </Header>
    <div className="w-full h-[calc(100vh-56px)] bg-neutral-900">
  
    { children }
    </div>
    </>
  );
}


