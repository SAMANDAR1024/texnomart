import { Button, Input, Modal } from "antd";
import UserIcon from "../../../assets/User";

import React, { useState } from "react";

function LoginModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="cursor-pointer "
        >
          {" "}
          <UserIcon />
        </button>
        <p className="text-xl">Kirish</p>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={false}
        // title="Modal Open"
      >
       <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-center font-bold">
            Kirish yoki Royhatdan O'tish
        </h2>
        <div>
            <label>Telefon</label>
            <Input type="Number" size="large" />
        </div>
        <div className="text-lg">
            <label>Ism</label>
            <Input size="large" />
        </div>
        <Button htmlType="submit" size="large" style={{backgroundColor:"orange", fontSize:22, color:"white", marginTop:10}} className="bg-orange-400">Kodni Olish</Button>
       </div>
      </Modal>
    </>
  );
}

export default LoginModal;
