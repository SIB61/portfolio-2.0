import user from "@/data.json";
export function ProjectSection({ className }: { className?: string }) {
  return (
    <div className={className} id="projects">
      <div className="text-[35px] font-[800] text-orange-gradient text-center">
        PROJECTS
      </div>
      <div className="mt-[27px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-[30px]">
        {user.projects.map((project, index) => {
          return (
            <div
              key={index}
              className="min-h-[300px] shadow-md  drop-shadow-lg flex flex-col hover:scale-105 cursor-pointer duration-500 text-white rounded-2xl overflow-hidden bg-[#2A2A2A]"
              style={{
                background: "#191919",
              }}
            >
              <img
                src={project.cover}
                className="w-full h-[235px] object-cover"
                alt=""
              />
              <div className="p-4 flex flex-1">
                <div className="flex-1">
                  <div className="text-[10px] font-[800] text-[#C5C5C5] ">
                    CLICK HERE TO VISIT
                  </div>
                  <div className="text-[16px] font-[800]">{project.title}</div>
                  <div className="text-[10px] font-[600] opacity-80">
                    {project.description}
                  </div>
                </div>
                <img className=" self-center" src="/assets/arrow.svg" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
