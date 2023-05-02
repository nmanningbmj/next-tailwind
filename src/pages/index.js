import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`p-24`}>
      <div className="flex flex-col">
        <Link href="/topic-list" className="text-3xl mb-4">
          Topic list
        </Link>
        <Link href="/topic-list" className="text-3xl">
          Treatment Algorithm
        </Link>
      </div>
    </main>
  );
}
