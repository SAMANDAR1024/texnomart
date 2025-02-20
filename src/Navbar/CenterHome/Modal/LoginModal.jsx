import { Button, Modal, message } from "antd";
import { useForm } from "react-hook-form";
import UserIcon from "../../../assets/User";
import React, { useState } from "react";
import axios from "axios";

function LoginModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otish, setOtish] = useState("back");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://gateway.texnomart.uz/api/common/v1/user/register",
        data
      );

      message.success("Kod yuborildi!!!");
      setOtish("kod");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      message.error("Xatolik yuz berdi, qayta urinib ko‘ring!!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <button onClick={() => setIsModalOpen(true)} className="cursor-pointer">
          <UserIcon />
        </button>
        <p className="text-xl">Kirish</p>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        {otish === "back" ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-center font-bold">
                Kirish yoki Ro‘yxatdan O‘tish
              </h2>
              <div className="flex flex-col gap-2">
                <label>Telefon</label>
                <input
                  className="p-2 border rounded-lg border-yellow-400"
                  {...register("numberPhone", { required: true })}
                  type="tel"
                  placeholder="+998 (94) 408 54 44"
                />
                {errors.numberPhone && (
                  <p className="text-red-500">Telefon raqam kiriting!!!</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label>Ism</label>
                <input
                  className="p-2 border rounded-lg border-yellow-400"
                  {...register("name", { required: true })}
                  placeholder="Ismingiz"
                />
                {errors.name && (
                  <p className="text-red-500">Ismingizni Kiriting!!!</p>
                )}
              </div>
              <Button
                htmlType="submit"
                size="large"
                loading={loading}
                style={{
                  backgroundColor: "orange",
                  fontSize: 22,
                  color: "white",
                  marginTop: 10,
                }}
              >
                Kodni Olish
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Button
              onClick={() => {
                setOtish("back");
              }}
            >
              back
            </Button>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-center font-bold">
                Kirish yoki Ro‘yxatdan O‘tish
              </h2>
              <div className="flex flex-col gap-2">
                <label>Parol</label>
                <input
                  className="p-2 border rounded-lg border-yellow-400"
                  {...register("parol", { required: true })}
                  type="password"
                  placeholder="Parol Kiriting"
                />
                {errors.numberPhone && (
                  <p className="text-red-500">Parol kiriting!!!</p>
                )}
              </div>

              <Button
                htmlType="submit"
                size="large"
                loading={loading}
                onCancel={() => setIsModalOpen(false)}
                style={{
                  backgroundColor: "orange",
                  fontSize: 22,
                  color: "white",
                  marginTop: 10,
                }}
              >
                Kodni Olish
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
}

export default LoginModal;
