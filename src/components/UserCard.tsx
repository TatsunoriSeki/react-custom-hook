import { VFC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0n16px",
    margin: "8px"
  };
  return (
    <div style={style}>
      <dl>
        <dd>Name</dd>
        <dd>{user.name}</dd>
        <dd>Mail</dd>
        <dd>{user.email}</dd>
        <dd>Address</dd>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
