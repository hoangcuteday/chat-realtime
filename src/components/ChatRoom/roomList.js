import { PlusOutlined } from "@ant-design/icons";
import { Collapse, Typography } from "antd";

const { Panel } = Collapse;

function RoomList() {
    return (
        <Collapse defaultActiveKey={['1']} ghost size="small">
            <Panel header='Danh sách các phòng' key='1'>
                <Typography.Link className="block p-5 font-medium text-ellipsis overflow-hidden whitespace-nowrap text-center">Room1</Typography.Link>
                <Typography.Link className="block p-5 font-medium text-ellipsis overflow-hidden whitespace-nowrap text-center">Room2</Typography.Link>
                <Typography.Link className="block p-5 font-medium text-ellipsis overflow-hidden whitespace-nowrap text-center">Room3</Typography.Link>
                <button className="w-full p-4 text-2xl text-slate-700 hover:text-orange-300 flex items-center justify-center"> <PlusOutlined className="mr-3" />Tạo phòng mới</button>
            </Panel>

        </Collapse>
    );
}

export default RoomList;