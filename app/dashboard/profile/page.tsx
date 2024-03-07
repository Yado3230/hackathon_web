"use client";

import { fetchInfoByNationalID } from "@/actions/user-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const Page = () => {
  const [nationalId, setNaionalId] = useState<string>("");
  const [userInformation, setUserInformation] = useState<any>();
  const [loading, setLoading] = useState(false);

  const onFetchInfo = async () => {
    const userInformation = await fetchInfoByNationalID(nationalId.toString());
    setUserInformation(userInformation);
  };
  return (
    <>
      {!userInformation?.ekycDetal && (
        <div className="flex flex-col space-y-4">
          <div>
            <span>Confirm Your Indentity with your National ID</span>
          </div>
          <div className="flex items-center space-x-2">
            <Label>National ID</Label>
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                value={nationalId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNaionalId(e.target.value)
                }
                placeholder="National ID"
              />
              <Button onClick={() => onFetchInfo()}>Verify</Button>
            </div>
          </div>
          {userInformation && (
            <div>
              <span>hello</span>
            </div>
          )}
        </div>
      )}
      {!userInformation?.ekycDetal && (
        <div>
          <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://via.placeholder.com/150"
                  alt="User"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  momo
                </div>
                <div className="mt-2 text-gray-600 text-sm">Gender: Male</div>
                <div className="mt-2 text-gray-600 text-sm">
                  Address: Addis Ababa
                </div>
                <div className="mt-2 text-gray-600 text-sm">Age: 25</div>
                <div className="mt-2 text-gray-600 text-sm">
                  Individual ID: 9846905677983682
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full mx-auto p-6 mt-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Complete Your Information</h2>
        {/* Education Information */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Education Information</h3>
          <div className="flex space-x-2 items-center">
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Education Level"
            />
            <input
              type="text"
              className="w-full  p-2 border rounded-md"
              placeholder="Institution"
            />
          </div>
        </div>
        {/* Family Information */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Family Information</h3>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Spouse's Name"
          />
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Children's Names"
          />
        </div>
        {/* Work Information */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Work Information</h3>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Company Name"
          />
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Job Title"
          />
        </div>
        {/* Property Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Property Information</h3>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Property Type"
          />
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Property Value"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
