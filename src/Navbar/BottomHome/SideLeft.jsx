import { Button, Checkbox, Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { Children, useState } from "react";

function SideLeft({ filter }) {
  const [qisqarish, setQistarish] = useState(false);
  console.log(filter);

  return (
    <div className="flex  justify-between">
      <Collapse
        defaultActiveKey={[1]}
        className="w-96"
        items={filter.map((item) => {
          return {
            key: item.id,
            label: (
              <span className="flex gap-3 items-center">
                <span className="font-bold">{item.name}</span>
                <span className="text-gray-400">{item.count}</span>
              </span>
            ),
            children: (
              <div>
                {qisqarish === false && item.values.length > 10
                  ? item.values.slice(0, 10).map((i) => {
                      return (
                        <div key={i.id} className="flex items-center gap-2">
                          <div className="my-1">
                            <Checkbox className="text-xl ">{i.value}</Checkbox>
                          </div>
                          <p className="text-gray-400">{i.count}</p>
                        </div>
                      );
                    })
                  : item.values.map((i) => {
                      return (
                        <div key={i.id} className="flex items-center gap-2">
                          <div className="my-1">
                            <Checkbox className="text-xl ">{i.value}</Checkbox>
                          </div>
                          <p className="text-gray-400">{i.count}</p>
                        </div>
                      );
                    })}
                <Button
                  onClick={() => {
                    setQistarish(!qisqarish);
                  }}
                >
                  {qisqarish ? <UpOutlined /> :  <DownOutlined />}
                  {qisqarish ? "Yopish" :"Koproq Korish"}

                </Button>
              </div>
            ),
          };
        })}
      />
    </div>
  );
}

export default SideLeft;
