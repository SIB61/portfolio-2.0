import {
  AndroidOriginal,
  AngularjsOriginal,
  TypescriptOriginal,
} from "devicons-react";

const tools = [
  {
    url: "/assets/stack/js.svg",
    name: "js",
  },
  {
    url: "/assets/stack/ts.svg",
    name: "ts",
  },
  {
    url: "/assets/stack/html.svg",
    name: "html",
  },
  {
    url: "/assets/stack/css.svg",
    name: "css",
  },
  {
    url: "/assets/stack/next.svg",
    name: "nextjs",
  },
  {
    url: "/assets/stack/react.svg",
    name: "react",
  },
  {
    url: "/assets/stack/angular.svg",
    name: "angular",
  },
  {
    url: "/assets/stack/express.svg",
    name: "express",
  },
  {
    url: "/assets/stack/mongo.svg",
    name: "mongodb",
  },
  {
    url: "/assets/stack/kotlin.svg",
    name: "kotlin",
  },
  {
    url: "/assets/stack/java.svg",
    name: "java",
  },
  {
    url: "/assets/stack/android.svg",
    name: "android",
  },
  {
    url: "/assets/stack/dotnetcore.svg",
    name: "dotnetcore",
  },
  {
    url: "/assets/stack/redis.svg",
    name: "redis",
  },
  {
    url: "/assets/stack/rabbitmq.svg",
    name: "rebbitmq",
  },
  {
    url: "/assets/stack/vim.svg",
    name: "vim",
  },
  {
    url: "/assets/stack/atlassian.svg",
    name: "atlassian",
  },
  {
    url: "/assets/stack/git.svg",
    name: "git",
  },
  {
    url: "/assets/stack/github.svg",
    name: "github",
  },
];
export function Tools(props: { className?: string }) {
  return (
    <div className={props.className}>
      <div className="text-[20px] text-[#C5C5C5] text-center font-[600]">
        TOOLS
      </div>
      <div className="flex justify-center gap-[30px] flex-wrap mt-[48px]">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="p-4 bg-[#191919] rounded-lg shadow-md drop-shadow-lg hover:scale-110 cursor-pointer duration-500"
          >
            <img
              className="h-[40px] md:h-[50px] lg:h-[60px] aspect-square "
              src={tool.url}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
