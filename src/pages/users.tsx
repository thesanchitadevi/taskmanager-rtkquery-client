import { AddUserModal } from "@/components/modules/users/AddUserModal";

const Users = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-md py-4">Users</h1>

        <AddUserModal />
      </div>
      <div className="grid grid-cols-3 gap-4"></div>
    </>
  );
};

export default Users;
