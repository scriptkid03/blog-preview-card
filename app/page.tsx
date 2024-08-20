import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-yellow">
      <div className="flex flex-col h-fit w-96 bg-white rounded-2xl card p-6 gap-6">
        <div className="">
          <Image
            src={"/svgs/illustration-article.svg"}
            height={350}
            width={350}
            alt="Illustration"
            className="rounded-xl"
          />
        </div>
        <div className=" flex flex-col gap-3">
          <div className="px-3 py-1 rounded-lg bg-yellow w-fit ">
            <span className="text-cinder extrabold">
              Learning
            </span>
          </div>
          <div>
            <span className="text-cinder semibold">
              Published 21 Dec 2023
            </span>
          </div>
          <div>
            <span className="text-cinder text-2xl extrabold">
              HTML & CSS foundations
            </span>
          </div>
          <div>
            <span className="text-paleSky semibold">
              These languages are the backbone of every website, defining structure, content, and presentation.
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Image 
            src={"/images/image-avatar.webp"}
            height={32}
            width={32}
            alt="avatar"
          />
          <span className="extrabold text-cinder">
            Greg Hooper
          </span>
        </div>
      </div>
    </main>
  );
}
