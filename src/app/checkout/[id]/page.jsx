"use client";
import Button from "@/components/common/Button";
import HeroBannar from "@/components/common/HeroBannar";
import InputFiled from "@/components/common/InputFiled";
import TextArea from "@/components/common/TextArea";
import LoggedUserIData from "@/hooks/LoggedUserIData";
import { dataLoader } from "@/services/dataLoader";
import { useEffect, useState } from "react";
import {
  MdEmail,
  MdMessage,
  MdOutlineDriveFileRenameOutline,
  MdPhone,
  MdPriceCheck,
} from "react-icons/md";

const CheckOutPage = ({ params }) => {
  const [serviceData, setServiceData] = useState({});

  const { data } = LoggedUserIData();

  const loadData = async (id) => {
    // single service data load form databse
    if (id) {
      const data = await dataLoader(`/api/services/${id}`);
      setServiceData(data);
    }
  };

  useEffect(() => {
    loadData(params?.id);
  }, [params?.id]);

  // const handle checkout
  const handleCheckOut = async (event) => {
    event.preventDefault();

    const input = event.target;

    const newOrder = {
      name: input.name.value,
      email: input.email.value,
      number: input.number.value,
      price: input.price.value,
      date: input.date.value,
      message: input.message.value,
      serviceId: serviceData?._id,
    };

    // post request with fetch in server
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/booking`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "content-type": "aplication/json",
      },
    });

    const data = await res.json();

    if (data?.acknowledged) {
      alert("Order succesfull");
      input.reset();
    } else if (data?.message) {
      alert(`${data?.message}`);
    }
  };

  return (
    <div>
      <HeroBannar img={serviceData?.img} title={"Check Out"} />

      {/* form */}
      <div class="max-w-3xl mx-auto my-12 ">
        <form onSubmit={handleCheckOut} className="space-y-4">
          {/* name */}
          <InputFiled
            label={"Full Name"}
            defaultValue={data?.user?.name}
            name={"name"}
            type={"text"}
            required={true}
            placeholder={"Your Full Name"}
            icon={<MdOutlineDriveFileRenameOutline />}
          />

          {/* email */}
          <InputFiled
            label={"Eamil"}
            disabled={true}
            defaultValue={data?.user?.email}
            name={"email"}
            type={"eamil"}
            required={true}
            placeholder={"Your Eamil"}
            icon={<MdEmail />}
          />

          {/* number */}
          <InputFiled
            label={"Phone No"}
            name={"number"}
            type={"tel"}
            required={true}
            placeholder={"Your Phone No"}
            icon={<MdPhone />}
          />

          {/* price */}
          <InputFiled
            disabled={true}
            label={"Price"}
            defaultValue={serviceData?.price}
            name={"price"}
            type={"number"}
            required={true}
            placeholder={"Your Service Price"}
            icon={<MdPriceCheck />}
          />

          {/* date */}
          <InputFiled
            label={"Date"}
            name={"date"}
            type={"date"}
            required={true}
          />

          {/* text area */}
          <TextArea
            rows={7}
            required={true}
            name={"message"}
            label={"Write Message"}
            placeholder={"Write Message"}
            icon={<MdMessage />}
          />

          {/* button */}
          <div className="!mt-8">
            <Button label={"Order Confirm"} fullWidth={true} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOutPage;
