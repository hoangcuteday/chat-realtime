import { Avatar, Typography } from "antd";

function Message({ text, displayName, createdAt, photoURL }) {
    return (
        <div className="mb-[10px]">
            <div>
                <Avatar src={photoURL}>A</Avatar>
                <Typography.Text className="font-bold ml-[5px]">{displayName}</Typography.Text>
                <Typography.Text className="ml-[10px] text-xs text-[#a7a7a7]">{createdAt}</Typography.Text>
            </div>
            <div>
                <Typography.Text className="ml-[30px]">{text}</Typography.Text>
            </div>
        </div>
    );
}

export default Message;