// import resumeSchema from "@jsonresume"
import { ResumeSchema as ResumeSchemaTypes } from "@kurone-kito/jsonresume-types";

export async function getResumeGist() {
   const gistId = "c29c884dbddac3e533b8aa8a610033f9"; 
   const response = await fetch(`https://api.github.com/gists/${gistId}`);
   if (!response.ok) {
      throw new Error(`Failed to fetch Gist: ${response.statusText}`);
    }

   const gistData = await response.json();
   return gistData.files;
}

export async function getResumeJson():Promise<ResumeSchemaTypes> {
   const res = await fetch(
     "https://gist.githubusercontent.com/muhdshafiqsofian/c29c884dbddac3e533b8aa8a610033f9/raw/resume.json",
     { next: { revalidate: 86400 } }
   );
 
   if (!res.ok) {
     throw new Error("Failed to fetch gists");
   }
   return res.json();
 }

//  export function validateResumeJson(data: object): Promise<boolean> {
//    return new Promise((resolve) => {
//      resumeSchema.validate(
//        data,
//        function (err: string, report: boolean) {
//          if (err) {
//            console.error("The resume was invalid:", err);
//            resolve(false);
//          } else {
//            console.log("Resume validated successfully:", report);
//            resolve(true);
//          }
//        },
//        function (err: string) {
//          console.error("The resume was invalid:", err);
//          resolve(false);
//        }
//      );
//    });
//  }

export async function getRepoInfo() {
   const owner = "muhdshafiqsofian"; 
   const repo = "my-portfolio-blog";
 
   const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
   
   if (!response.ok) {
     throw new Error(`Failed to fetch repository data: ${response.statusText}`);
   }
 
   const data = await response.json();
   return data;
}