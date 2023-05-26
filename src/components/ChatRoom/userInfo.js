import { Avatar } from "antd";

function UserInfo() {
    return (
        <div className="w-full flex justify-between items-center p-5 border-b border-gray-300">
            <div className="flex justify-center items-center gap-2">
                <Avatar>A</Avatar>
                <span className="text-lg font-medium break-words text-orange-300">
                    Nguyễn Minh Hoàng
                </span>
            </div>
            <button className="font-medium border-2 p-3 rounded-md border-red-200 hover:bg-red-200 hover:text-blue-400">Đăng xuất</button>
        </div>
    );
}

export default UserInfo;