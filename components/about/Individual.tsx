import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const Individual = ({
  name,
  role,
  about,
  socials,
  image,
  gradient,
}: {
  name: string;
  role: string;
  about: string;
  socials: {
    discord?: string;
    twitter?: string;
    website?: string;
    github?: string;
  };
  image: StaticImageData;
  gradient?: string;
}) => {
  const user = name.split("#");

  return (
    <div
      className={`relative rounded-2xl bg-[#36393E] bg-gradient-to-b px-4 pb-4 pt-12 shadow-lg 
    ${gradient && `${gradient}`}
    `}
    >
      <div className="absolute -top-14 w-24 overflow-clip rounded-full border-[6px] border-[#36393E]">
        <Image
          className="object-cover"
          src={image}
          alt="Picture of the author"
        />
      </div>

      <div
        className={`w-[20rem] rounded-lg  ${
          gradient ? "bg-black/30" : "bg-[#191A1C]"
        }`}
      >
        <div className="p-4 pb-1 text-3xl font-semibold">
          {user[0]}
          <span className="text-gray-400">#{user[1]}</span>
        </div>
        <div className="border-t border-gray-400"></div>
        <div className="flex flex-col gap-y-3 p-4">
          <div>
            <div className="text-lg font-bold tracking-wide">ROLE</div>
            <div className="text-white-400">{role}</div>
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide">ABOUT ME</div>
            <div
              dangerouslySetInnerHTML={{ __html: about }}
              className="text-white-400"
            ></div>
          </div>
          <div>
            <div className="mb-2 text-lg font-bold tracking-wide">SOCIALS</div>
            <div className="flex gap-x-6">
              {socials.discord && (
                <Link href={socials.discord} target="_blank">
                  <FontAwesomeIcon icon={faDiscord} size="3x" />
                </Link>
              )}

              {socials.github && (
                <Link href={socials.github} target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </Link>
              )}

              {socials.twitter && (
                <Link href={socials.twitter} target="_blank">
                  <FontAwesomeIcon icon={faTwitter} size="3x" />
                </Link>
              )}

              {socials.website && (
                <Link href={socials.website} target="_blank">
                  <FontAwesomeIcon icon={faGlobe} size="3x" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Individual;