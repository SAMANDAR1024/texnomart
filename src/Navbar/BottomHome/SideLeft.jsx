import { Checkbox, Collapse } from "antd";
import React, { Children } from "react";

function SideLeft({ filter }) {
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
                {item.values.map((i) => {
                
                  return (
                    <div key={i.id} className="flex items-center gap-2">
                       <div>
                       <Checkbox className="font-bold">{i.value}</Checkbox>
                       </div>
                      {/* <p className="font-bold">{i.value}</p> */}
                      <p className="text-gray-400">{i.count}</p>
                    </div>
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
}

export default SideLeft;
