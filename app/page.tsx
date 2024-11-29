import React from "react";
import About from "./components/about";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { getRepoInfo, getResumeJson } from "./api/action";
import Link from "next/link";
import Resume from "./components/resume";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "./components/header";
import Footer from "./components/footer";

export default async function Home() {
  const data = await getRepoInfo();
  const { owner } = data;

  const resumeData = await getResumeJson();
  if (!resumeData) return;

  // const validate = await validateResumeJson(resumeData);
  // if (!validate) return;
  // console.log(resumeData);

  return (
    <>
      <Header />
      <section
        id="home"
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-stone-200 dark:bg-muted rounded-b-lg"
      >
        <div className="flex gap-6 row-start-2 justify-center items-center w-full">
          <h1 className="lg:w-[250px] text-xl font-extrabold tracking-tight lg:text-4xl">
            <div className="w-full text-center">
              <About />
            </div>
            <p className="text-base text-center font-light text-muted-foreground mt-2">
              Software Developer
            </p>
            {/* <div className="flex justify-center gap-4 text-sm mt-1">
              {resumeData.basics?.profiles?.map((item) => {
                return (
                  <Badge key={item.url} variant="outline">
                    <Link
                      href={item.url || "https://github.com/muhdshafiqsofian/"}
                      target="_blank"
                    >
                      {item.network}
                    </Link>
                  </Badge>
                );
              })}
            </div> */}
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
          <Button variant="link">
            <Link href="#resume" className="animate-pulse">
              <ChevronDown />
            </Link>
          </Button>
        </div>
      </section>
      <Resume {...resumeData} />
      <Footer {...resumeData} />
    </>
  );
}
