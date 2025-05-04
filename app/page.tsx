
import Link from "next/link";
import Image from "next/image";
import { projectdetails } from "@/lib/projects";
import { codingplatformdetails } from "@/lib/platform";
export default function Home() {
  return (
    <main className="w-fit mx-auto min-h-screen p-5">
      <h1 className="text-[70px] md:text-[100px] cascadia-code-bold">Sahayak Sharma</h1>
      <Link href="https://drive.google.com/file/d/1SzEjzktRrzo6BYCEQqdvdGTB6LYqicfV/view?usp=sharing" className="text-[15px] md:text-[20px] cascadia-code-light text-blue-500 underline">View Resume</Link>
      <section className="cascadia-code-light py-20 flex flex-col gap-5">
        <div className="flex gap-5"><Image src="/logos/mail.svg" alt="image here" width={20} height={20} /><p>sahayaksharma6@gmail.com</p></div>
        <div className="flex gap-5"><Image src="/logos/linkedin.svg" alt="image here" width={20} height={20} /><Link href="https://www.linkedin.com/in/sahayak-sharma/">linkedin.com/sahayak-sharma</Link></div>
        <div className="flex gap-5"><Image src="/logos/github.svg" alt="image here" width={20} height={20} /><Link href="https://github.com/SahayakSharma">github.com/SahayakSharma</Link></div>
      </section>

      <section>Link
        <h1 className="text-2xl cascadia-code-medium pb-10">Best Work</h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {
            projectdetails.map((project, index) => {
              return (
                <div className="flex flex-col gap-3 cascadia-code-light" key={index}>
                  <h2 className="text-xl underline">{project.title}</h2>
                  <div className="flex gap-3">
                    <p>Description  : </p>
                    <Link href={project.descriptionLink}>{project.descriptionLabel}</Link>
                  </div>
                  <div className="flex gap-3">
                    <p>Preview  : </p>
                    <Link href={project.previewLink}>{project.previewLabel}</Link>
                  </div>
                  <div className="flex gap-3">
                    <p>Application Code  : </p>
                    <Link href={project.codeLink}>{project.codeLabel}</Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className="py-20">
        <h1 className="cascadia-code-medium text-xl pb-10">Coding Platforms</h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {
            codingplatformdetails.map((platform, index) => {
              return (
                <div className="flex flex-col gap-3 cascadia-code-light" key={index}>
                  <h2 className="text-xl underline capitalize">{platform.name}</h2>
                  <div className="flex gap-3">
                    <p>Rating  : </p>
                    <p>{platform.rating}</p>
                  </div>
                  <div className="flex gap-3">
                    <p>Profile : </p>
                    <Link href={platform.profileLink}>{platform.profileLabel}</Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  );
}
