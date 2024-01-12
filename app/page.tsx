import Image from "next/image";
import NavBar from "@/components/navbar";
import { Squirrel, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-full min-h-screen flex flex-col items-center justify-between pt-12 pb-4 px-4">
        <section className="w-full flex items-start justify-between h-50">
          <div className="flex items-start justify-start gap-4">
            <Image
              src="/sama.png"
              alt="Sam Altman"
              height={368}
              width={368}
              className="rounded-2xl"
            />

            <div className="h-48 w-48 bg-black/70 rounded-2xl flex flex-col gap-4 p-3">
              <div className="flex items-center justify-between font-semibold">
                <h2 className="text-yellow-600">Reminders</h2>
                <p className="text-lg">2</p>
              </div>

              <div className="flex items-center justify-start gap-4">
                <div className="rounded-full ring-1 ring-zinc-500 h-4 w-4"></div>
                <p className="text-sm">Press Command + E</p>
              </div>
              <div className="flex items-center justify-start gap-4">
                <div className="rounded-full ring-1 ring-zinc-500 h-4 w-4"></div>
                <p className="text-sm">Get CastGPT</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-96 h-48 flex flex-col items-start justify-start gap-4 bg-black/70 rounded-2xl">
              <div className="w-full h-12 bg-white/10 rounded-t-2xl"></div>
              <div className="w-full flex flex-col divide-y divide-white/10 px-4 text-sm">
                <h1 className="py-3">
                  With great workflow comes great productivy
                </h1>
                <h2 className="py-3">
                  Get instant access to ChatGPT with a single shortcut key
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                src="/icon128x128.png"
                alt="CastGPT Icon"
                width={48}
                height={48}
              />
              <p className="text-sm font-medium">Get CastGPT</p>
            </div>
          </div>
        </section>

        <section className="w-full flex items-center justify-between h-50">
          <div className="w-full max-w-96 flex flex-col items-center justify-center gap-2 p-2 bg-black/70 rounded-2xl">
            <div className="w-full flex gap-2">
              <div className="h-20 w-full flex flex-col justify-between items-start bg-white/10 rounded-2xl p-2">
                <span>
                  <Squirrel color="white" size={20} />
                </span>
                <p className="text-sm">Updates</p>
              </div>
              <div className="h-20 w-full flex flex-col justify-between items-start bg-white/10 rounded-2xl p-2">
                <span>
                  <HelpCircle color="white" size={20} />
                </span>
                <p className="text-sm">Help</p>
              </div>
            </div>

            <div className="w-full flex gap-2">
              <div className="h-20 w-full flex flex-col justify-between items-start bg-white/10 rounded-2xl p-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                  </svg>
                </span>
                <p className="text-sm">Discord</p>
              </div>
              <div className="h-20 w-full flex flex-col justify-between items-start bg-white/10 rounded-2xl p-2">
                <span>
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
                </span>
                <p className="text-sm">Twitter</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
