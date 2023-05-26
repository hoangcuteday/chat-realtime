import ChatWindow from "./chatWindow";
import SideBar from "./sidebar";

function ChatRoom() {
    return (
        <div className="grid grid-cols-4">
            <div className="lg:col-span-1 col-span-4"><SideBar /></div>
            <div className="lg:col-span-3 col-span-4"><ChatWindow /></div>
        </div>
    );
}

export default ChatRoom;