import Image from "next/image";
import {
  HomeIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import onClickOutside from "react-onclickoutside";
import Skeleton from "react-loading-skeleton";
import { useSession } from "next-auth/react";
import { TableCellsIcon, XMarkIcon } from "@heroicons/react/24/solid";

function SideBarMenu({ closeSideBar }) {
  const { session, status } = useSession();
  const router = useRouter();
  SideBarMenu.handleClickOutside = closeSideBar;
  const sideBarClickHandler = (href) => {
    closeSideBar();
    router.push(href);
  };

  return (
    <div className="relative h-full w-full sideBarMenu bg-white px-8 py-6  font-medium md:hidden">
      <div>
        PC BUILDER
      </div>
      <div className=" h-0.5 my-4 w-full bg-gray-100"></div>
      <div className="my-8">
        {!status ? (
          session ? (
            <Image
              src={session?.user?.image || "/img/profile_pic.svg"}
              loading="lazy"
              alt=""
              width="24"
              height="24"
              className="object-contain w-10 h-10 rounded-full mr-1 hover:shadow-md"
              onClick={() => sideBarClickHandler("/profile")}
            />
          ) : (
            <span className="link text-blue-light text-lg" onClick={signIn}>
              Login/Signup
            </span>
          )
        ) : (
          <Skeleton circle={true} width={50} height={50} />
        )}
      </div>
      <div className="gap-4 flex flex-col">
        <div>
          <span
            onClick={() => sideBarClickHandler("/")}
            className="link inline-flex"
          >
            <HomeIcon className="w-5 mr-6" /> Home
          </span>
        </div>
        {session && session?.admin && (
          <div>
            <span
              onClick={() => sideBarClickHandler("/admin/dashboard")}
              className="link inline-flex"
            >
              <TableCellsIcon className="w-5 mr-6" /> Dashboard
            </span>
          </div>
        )}
        {session && (
          <div>
            <span
              onClick={() => sideBarClickHandler("/profile")}
              className="link inline-flex"
            >
              <UserCircleIcon className="w-5 mr-6" /> Profile
            </span>
          </div>
        )}
        <div>
          <span
            onClick={() => sideBarClickHandler("/cart")}
            className="link inline-flex"
          >
            <ShoppingCartIcon className="w-5 mr-6" /> Cart
          </span>
        </div>
        <div>
          <span
            onClick={() => sideBarClickHandler("/orders")}
            className="link inline-flex"
          >
            <ShoppingBagIcon className="w-5 mr-6" /> Orders
          </span>
        </div>
        <div>
          <span
            onClick={() => sideBarClickHandler("/about")}
            className="link inline-flex"
          >
            <EnvelopeIcon className="w-5 mr-6" /> Contact
          </span>
        </div>
        <div>
          <span
            onClick={() => sideBarClickHandler("/about")}
            className="link inline-flex"
          >
            <InformationCircleIcon className="w-5 mr-6" /> About
          </span>
        </div>
        {session && (
          <div>
            <span
              onClick={() => {
                signOut();
              }}
              className="link inline-flex"
            >
              <ArrowLeftOnRectangleIcon className="w-5 mr-6" /> Logout
            </span>
          </div>
        )}
      </div>
      <div className="absolute top-2 right-2">
        <XMarkIcon className="w-7" onClick={closeSideBar} />
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SideBarMenu.handleClickOutside,
};

export default onClickOutside(SideBarMenu, clickOutsideConfig);