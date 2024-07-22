"use client";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function page() {
  const authState = useSelector((state: RootState) => state.auth);
  const [followers, setFollowers] = useState<string[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(`http://localhost:8000/follow/getFollowers`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: authState.user!._id,
        userType: authState.userType,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      setFollowers(data);
    }
  };
  return (
    <div className="bg-white w-full h-full">
      <div className="flex flex-row h-full gap-3">
        <div className="flex flex-col w-48 border-r-black border-r-2 h-full">
          Chatnames
          {followers.map((follower) => (
            <>${follower[0]}</>
          ))}
        </div>
        <div className="flex flex-col w-full   h-full">actualChat</div>
      </div>
    </div>
  );
}
