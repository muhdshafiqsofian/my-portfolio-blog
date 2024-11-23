import React from "react";
import About from "./components/about";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { getRepoInfo, getResumeJson, validateResumeJson } from "./api/action";
import Link from "next/link";
import Resume from "./components/resume";

export default async function Home() {
  const data = await getRepoInfo();
  const { owner } = data;

  const resumeData = await getResumeJson();
  if (!resumeData) return;

  const validate = await validateResumeJson(resumeData);
  // if (!validate) return;
  // console.log(resumeData);

  return (
    <>
      <section
        id="home"
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        <div className="flex gap-8 row-start-2 justify-center items-center w-full">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            <About />
            <p className="text-base text-center font-light dark:text-slate-200">
              Software Developer
            </p>
          </h1>
          <Link href={owner.html_url} target="_blank">
            <Image
              alt=""
              src={owner.avatar_url}
              width={150}
              height={150}
              className="rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </Link>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Link href="#resume" className="animate-pulse">
            <ChevronDown />
          </Link>
        </div>
      </section>
      <Resume {...resumeData} />
    </>
  );
}
