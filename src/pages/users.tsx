import { AddUserModal } from "@/components/modules/users/AddUserModal";
import UserCard from "@/components/modules/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

const Users = () => {
  const users = useAppSelector(selectUsers);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-md py-4">Users</h1>

        <AddUserModal />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
