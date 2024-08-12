"use client";

import LoggedUserIData from "@/hooks/LoggedUserIData";
import { dataLoader } from "@/services/dataLoader";
import { useEffect, useState } from "react";

const MyBookinsPage = () => {
  const [bookings, setBookings] = useState([]);

  const { data } = LoggedUserIData();

  // load my bookings data
  const loadData = async (email) => {
    // single service data load form databse
    if (email) {
      const data = await dataLoader(`/api/my-bookings/${email}`);
      setBookings(data);
    }
  };

  useEffect(() => {
    loadData(data?.user?.email);
  }, [data?.user?.email]);

  // handle bookings delete
  const handleBookingsDelete = async (id) => {
    // delete request with fetch in server for my bookings
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/bookings-delete/${id}`,
      {
        method: "DELETE",
      }
    );

    const { acknowledged, deletedCount } = await res.json();

    if (acknowledged && deletedCount > 0) {
      alert("Delete succesfully");
      // ui update
      loadData(data?.user?.email);
    } else if (data?.message) {
      alert(`${data?.message}`);
    }
  };

  return (
    <div className="overflow-x-auto py-12">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Order No
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Service Name
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
          {bookings?.map(({ _id, title, price, date }, idx) => (
            <tr key={_id}>
              <td className="px-4 py-4 text-sm text-gray-800">{idx + 1}</td>
              <td className="px-4 py-4 text-sm text-gray-800">{title}</td>
              <td className="px-4 py-4 text-sm text-gray-800">{price}</td>
              <td className="px-4 py-4 text-sm text-gray-800">{date}</td>
              <td className="px-4 py-4 text-sm text-gray-800">
                <button className="text-blue-600 mr-4">Edit</button>

                {/* delete button */}
                <button
                  onClick={() => handleBookingsDelete(_id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookinsPage;
