import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeartIcon } from "@heroicons/react/24/outline";

function Footer() {
  const router = useRouter();
  const gmailHandler = () => {
    window.open(
      "mailto:" +
        "sayedakramsakib@gmail.com" +
        "?subject=" +
        " " +
        "&body=" +
        " ",
      "_self"
    );
  };
  return (
    <div className="bg-gray-800 py-8 px-6 text-gray-200  lg:text-base text-sm">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center lg:space-x-8 space-x-4">
            <Link href="/">
              <span className="cursor-pointer hover:text-white">Home</span>
            </Link>
            {/* {!admin ? (
              <Link href="/orders">
                <span className="cursor-pointer hover:text-white">Orders</span>
              </Link>
            ) : (
              <></>
            )} */}
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="md:w-6 w-5  my-auto">
              <Image
                width={25}
                height={25}
                src="/img/social/email.svg"
                objectFit="contain"
                className="cursor-pointer"
                alt="email"
                onClick={gmailHandler}
              />
            </div>
            <div className="md:w-6 w-5 my-auto">
              <Image
                width={25}
                height={25}
                src="/img/social/linkedin.svg"
                objectFit="contain"
                className="cursor-pointer"
                alt="linkedin"
                onClick={() => {
                  router.push("https://www.linkedin.com/in/akram-sakib");
                }}
              />
            </div>
            <div className="md:w-6 w-5 my-auto">
              <Image
                width={25}
                height={25}
                src="/img/social/github.svg"
                objectFit="contain"
                className="cursor-pointer"
                alt="github"
                onClick={() => router.push("https://github.com/akram-sakib")}
              />
            </div>
          </div>
        </div>
        <p className="mt-6 text-gray-200 text-center flex items-center flex-wrap justify-center">
          Made By <HeartIcon className="w-5 mx-2 text-red-500" /> by
          <span className="text-white hover:underline ml-2">
            <Link href="">Akram Sakib</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
