import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/icon-website.svg";

import { LocalGitHubUser } from "../../types";
import { InfoItem, InfoItemProps } from "../InfoItem";
import styles from "./UserInfo.module.scss";

interface UserInfoProps
  extends Pick<LocalGitHubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <WebsiteIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, i) => (
        <InfoItem {...item} key={i} />
      ))}
    </div>
  );
};
