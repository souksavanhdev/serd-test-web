import React from 'react'
import { Card, List, Avatar } from 'antd';

export default function Home() {
    const data = [
        {
            title: 'ອອມເງີນ',
        },
        {
            title: 'ລາຍຈ່າຍ',
        },
        {
            title: 'ລາຍຈ່າຍ',
        },
        {
            title: 'ລາຍຈ່າຍ',
        },
    ];
    return (
        <div className=' p-5'>
            <div className=' flex overflow-scroll'>
                <Card
                    // title="Card title"
                    bordered={false}
                    className=' bg-green-800 text-[#FFFFFF] min-w-full w-full h-40 flex items-center '
                >
                    <p className='text-[20px]'>ເງີນອອມ</p>
                    <p className='text-[20px] font-bold'>10,000,000 ກີບ </p>
                </Card>

                <Card
                    // title="Card title"
                    bordered={false}
                    className='min-w-full ml-5 w-full h-40 flex items-center '
                >
                    <p className='text-[20px]'>ລາຍຈ່າຍ </p>
                    <p className='text-[20px] font-bold'>10,000,000 ກີບ </p>
                </Card>

                <Card
                    // title="Card title"
                    bordered={false}
                    className='min-w-full w-full ml-5 h-40 flex items-center '
                >
                    <p className='text-[20px]'>ລາຍຮັບ </p>
                    <p className='text-[20px] font-bold'>10,000,000 ກີບ </p>
                </Card>
            </div>
            <div className=' font-bold mt-5'>ປະຫັວດການທຸລະກຳ</div>
            <List
                className=' mt-5'
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="ຈ່າຍຄ່າອາຫານ"
                        />
                        <div className=' flex flex-col'>
                            <div>1,000,000 ກີບ</div>
                            <div className=' text-gray-500 text-sm'>23/5/2024 13:00</div>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
}
