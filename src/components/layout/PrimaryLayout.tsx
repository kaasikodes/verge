import React from "react";
import AppHeader from "./AppHeader";
import AppSubHeader from "./AppSubHeader";
import {
  CalenderOutlinedIcon,
  HomeIcon,
  LocationIcon,
  ProfileIcon,
  SettingIcon,
  WalletIcon,
} from "~~/assets";
import GlobalSupport from "./GlobalSupport";
import AppFooter from "./AppFooter";

type TProps = {
  children: React.ReactNode;
};
const PrimaryLayout: React.FC<TProps> = ({ children }) => {
  return (
    <div className="bg-[#E4E4E4] min-h-screen">
      {/* GlobalSupport */}
      <GlobalSupport />
      {/* AppHeader */}
      <AppHeader />
      {/* AppSubHeader */}
      <AppSubHeader
        items={[
          {
            iconSrc: HomeIcon,
            name: `Dashboard`,
            link: `/`,
          },
          {
            iconSrc: LocationIcon,
            name: `Listings`,
            link: `/listings`,
          },
          {
            iconSrc: ProfileIcon,
            name: `Users`,
            link: `/users`,
          },
          {
            iconSrc: WalletIcon,
            name: `Account`,
            link: `/account`,
          },
          {
            iconSrc: CalenderOutlinedIcon,
            name: `Request`,
            link: `/request`,
          },
          {
            iconSrc: SettingIcon,
            name: `Settings`,
            link: `/settings`,
          },
        ]}
      />

      {children}
      <AppFooter />
    </div>
  );
};

export default PrimaryLayout;
