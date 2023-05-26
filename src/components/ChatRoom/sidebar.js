import RoomList from "./roomList";
import UserInfo from "./userInfo";

function SideBar() {
    return (
           <div className="w-full bg-red-50 lg:h-screen">
                <UserInfo />
                <RoomList />
           </div>
    );
}

export default SideBar;