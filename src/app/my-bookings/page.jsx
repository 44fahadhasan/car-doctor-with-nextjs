"use client";

import LoggedUserIData from "@/hooks/LoggedUserIData";
import { dataLoader } from "@/services/dataLoader";
import { useEffect, useState } from "react";

const MyBookinsPage = () => {
  const [bookings, setBookings] = useState([]);

  const { data } = LoggedUserIData();

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

  return (
    <div class="overflow-x-auto py-12">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100 whitespace-nowrap">
          <tr>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Order No
            </th>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Service Name
            </th>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200 whitespace-nowrap">
          {bookings?.map(({ _id, title, price, date }, idx) => (
            <tr key={_id}>
              <td class="px-4 py-4 text-sm text-gray-800">{idx + 1}</td>
              <td class="px-4 py-4 text-sm text-gray-800">{title}</td>
              <td class="px-4 py-4 text-sm text-gray-800">{price}</td>
              <td class="px-4 py-4 text-sm text-gray-800">{date}</td>
              <td class="px-4 py-4 text-sm text-gray-800">
                <button class="text-blue-600 mr-4">Edit</button>
                <button class="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookinsPage;
