import React from "react";

function Skills() {
  return (
    <div className="lg:h-[calc(100vh-80px)] py-6 lg:py-12 px-6 sm:px-20 md:px-32 lg:px-48 xl:px-64 ">
      <p className="text-2xl sm:text-4xl md:text-3xl font-bold text-white text-center">
        Skills
      </p>
      <div className="w-full flex flex-col justify-evenly h-full">
        <div className=" flex flex-col gap-12 items-start">
          <h2 className="text-2xl font-bold text-white">Frontend</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full">
            <div className="flex flex-col gap-4 col-span-1 ">
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=angular" />
                Angular
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=react" />
                React
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=nextjs" />
                Next.js
              </div>
            </div>
            <div className="flex flex-col gap-4 col-span-1 ">
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=js" />
                JavaScript
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=ts" />
                TypeScript
              </div>
            </div>
            <div className="flex flex-col gap-4 col-span-1 ">
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=css" />
                CSS
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=html" />
                HTML
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=tailwind" />
                Tailwind
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-12 items-start mt-8">
          <h2 className="text-2xl font-bold text-white">Backend</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-12 w-full">
            <div className="flex flex-col gap-4 col-span-1 ">
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=java"  />
                Java
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=cs" />
                C#
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=py" />
                Python
              </div>
            </div>
            <div className="flex flex-col gap-4 col-span-1 ">
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=express" />
                Express
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=nodejs" />
                Node.js
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=nestjs" />
                Nest.js
              </div>
            </div>
            <div className="flex flex-col gap-4 col-span-1 ">
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=mongodb" />
                MongoDB
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=mysql" />
                MySQL
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=postgres" />
                PostgreSQL
              </div>
            </div>
            <div className="flex flex-col gap-4 col-span-1 ">
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=prisma" />
                Prisma
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=firebase" />
                Firebase
              </div>
              <div className="flex gap-6 items-center text-white font-semibold">
                <img src="https://skillicons.dev/icons?i=supabase" />
                Supabase
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-evenly gap-1 mt-6"></div>
      </div>
    </div>
  );
}

export default Skills;
