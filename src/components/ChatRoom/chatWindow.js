import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import Message from "./message";

function ChatWindow() {
    return (
        <div className="h-screen">
            <div className="flex items-center justify-between h-14 px-4 border-b border-gray-300">
                <div className="flex flex-col justify-center">
                    <p className="font-bold">Room 1</p>
                    <span className="text-sm">Đây là room 1</span>
                </div>
                <div className="flex items-center justify-center">
                    <Button icon={<UserAddOutlined />} type="text" >Mời</Button>
                    <Avatar.Group size="small" maxCount={3}>
                        <Tooltip title="A" >
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="B" >
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title="C" >
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title="D" >
                            <Avatar>D</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </div>
            </div>
            <div className="h-[92%] flex flex-col p-[11px] justify-end">
                <div>
                    <Message text="Test" photoURL={null} displayName="hoàng" createdAt="11:10" />
                    <Message text="Test" photoURL={null} displayName="hoàng" createdAt="11:10" />
                    <Message text="Test" photoURL={null} displayName="hoàng" createdAt="11:10" />
                    <Message text="Test" photoURL={null} displayName="hoàng" createdAt="11:10" />
                </div>
                <Form>
                    <Form.Item>
                        <Input />
                    </Form.Item>
                    <Button>Gửi</Button>
                </Form>
            </div>
        </div>
    );
}

export default ChatWindow;