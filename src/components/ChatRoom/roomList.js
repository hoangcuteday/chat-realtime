import { Collapse, Typography } from "antd";

const { Panel } = Collapse;

function RoomList() {
    return (
        <Collapse defaultActiveKey={['1']} ghost>
            <Panel header='Danh sách các phòng' key='1' className="text-purple-400">
                <Typography.Link>Room1</Typography.Link>
                <Typography.Link>Room2</Typography.Link>
                <Typography.Link>Room3</Typography.Link>
            </Panel>

        </Collapse>
    );
}

export default RoomList;