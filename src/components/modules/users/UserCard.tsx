import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IUser } from "@/types/types";
import { Edit2, Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border rounded-lg shadow-sm p-4 my-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <h2>{user.name}</h2>
        </div>

        <div className="flex items-center">
          <Button variant="link" className="text-gray-500" size="sm">
            <Edit2 size={16} />
          </Button>
          <Button
            onClick={() => dispatch(removeUser(user.id))}
            variant="link"
            className="text-red-500"
            size="sm"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
