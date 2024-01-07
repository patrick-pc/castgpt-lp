import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-between p-6 lg:py-16 lg:px-8 mx-0 lg:mx-8">
        <Link href="/">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/icon128x128.png"
              alt="CastGPT Logo"
              width={32}
              height={32}
            />

            <div className="font-medium text-lg tracking-wide">CastGPT</div>
          </div>
        </Link>

        <div className="flex items-center justify-between text-sm text-zinc-400 gap-8">
          <Link href="/help">Help</Link>
          <Link href="https://x.com/_patrickpc" target="_blank">
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px]"
            >
              <path
                d="M14.94 2h2.715l-5.93 6.777L18.7 18h-5.462L8.96 12.407 4.065 18H1.35l6.342-7.25L1 2h5.6l3.868 5.113L14.94 2Zm-.952 14.375h1.504L5.784 3.54H4.17l9.818 12.836Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
