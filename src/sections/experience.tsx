import data from "@/data.json";
import { months } from "@/lib/constants/date";
const experiences = data.experiences;
export function ExperienceSection({ className }: { className?: string }) {
  return (
    <div className={className} id="experience">
      <h1 className="text-[35px] font-[800] text-blue-gradient text-center">
        EXPERIENCE
      </h1>
      <div className="mt-[57px] flex flex-col gap-[50px] pr-4 border-r-2 overflow-x-hidden border-white border-solid">
        {experiences.map((experience, key) => {
          const startDate = new Date(experience.startDate);
          const endDate = new Date(experience.endDate || new Date());
          return (
            <div key={key} className=" text-[#8491A0] text-[15px] ">
              <div className="flex flex-col flex-wrap after:content-[''] after:w-20 after:h-1 after:bg-white after:rounded-full relative after:absolute after:-translate-y-1/2 after:top-1/2 after:-right-2 after:translate-x-full">
                <div className="flex-1 flex text-white text-[18px] lg:text-[22px] font-[700] ml-2">
                  <img
                    className="h-7 lg:h-9 mr-2"
                    src={experience.companyImage}
                    alt=""
                  />
                  {experience.position} at {experience.companyName}
                </div>
                <div className="text-[12px] md:text-[14px]">
                  <span>
                    {months[startDate.getMonth()] +
                      " " +
                      startDate.getFullYear()}
                  </span>
                  {" - "}
                  <span>
                    {months[endDate.getMonth()] + " " + endDate.getFullYear()}
                  </span>
                </div>
              </div>
              <div
                className="mt-6 text-[12px] md:text-[14px]"
                dangerouslySetInnerHTML={{ __html: experience.description }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
