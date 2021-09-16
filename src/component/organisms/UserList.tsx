import type { VFC } from "react";
import React from "react";
import type { UserItem, UserListProps } from "@/component/organisms/type";
import { User } from "@/component/molecules";

export const UserList: VFC<UserListProps> = (props) => {
  return (
    <div>
      {props.users &&
        props.users.map((item: UserItem) => {
          return <User name={item.name} key={item.socketId} />;
        })}
    </div>
  );
};
