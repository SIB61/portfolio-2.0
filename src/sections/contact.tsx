import user from "@/data.json";
const socials = [
  {
    name: "Instagram",
    imgUrl: "/assets/instagram.svg",
  },
  {
    name: "X",
    imgUrl: "/assets/x.svg",
  },
  {
    name: "YouTube",
    imgUrl: "/assets/youtube.svg",
  },
];
export function ContactSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <footer
        id="contact"
        className="pt-[80px] pb-[100px] flex justify-center  w-screen text-white bg-[#191919]"
      >
        <div className=" w-3/4">
          <div className="text-[24px] font-[700]">Contact</div>
          <div className=" mt-[34px] text-[13px] lg:text[16px] text-[#C5C5C5]">
            I am a full-stack software engineer with over{" "}
            {new Date().getFullYear() -
              new Date(user.experiencedFrom).getFullYear()}{" "}
            years of professional experience. My expertise lies in crafting
            robust and scalable architectures. I develop a product from its
            specifications to successfull deployment.
          </div>
          <div className="mt-[22px] text-[13px] lg:text-[16px] flex gap-[6px]">
            <img src="/assets/mail.svg" alt="" />
            {user.email}
          </div>
          <div className="flex gap-[27px] mt-[42px]">
            {socials.map((social, idx) => (
              <img key={idx} src={social.imgUrl} alt="" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
