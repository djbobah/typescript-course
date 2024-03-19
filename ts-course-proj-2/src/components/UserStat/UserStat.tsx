import { LocalGitHubUser } from "../../types";
import styles from "./UserStat.module.scss";

interface UserStatProps
  extends Pick<LocalGitHubUser, "repos" | "followers" | "following"> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={styles.userStat}>UserStat Component</div>
);
