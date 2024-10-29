"use client";
import { Button, Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, Bounce } from "react-toastify";
import { RootState } from "@/lib/store";

export default function FollowRequests() {
    const authState = useSelector((state: RootState) => state.auth);

    interface Follow {
        startupId: string;
        investorId: string;
        createdAt: Date;
    }
    const [followRequests, setFollowRequests] = useState<Follow[]>([]);

    const getRequests = async () => {
        try {
            const res = await fetch(`http://localhost:8000/follow/getfollowrequest`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    startupId: authState.user!["_id"],
                }),
            });
            if (res.ok) {
                const data1 = await res.json();
                setFollowRequests(data1);
            } else {
                toast.error(await res.json(), {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        } catch (e: any) {
            toast.error(e.message || "An error occurred", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    };

    const acceptFollow = async (startupId: string, investorId: string) => {
        try {
            const res = await fetch(`http://localhost:8000/follow/acceptRequest`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    startupId: startupId,
                    investorId: investorId,
                }),
            });
            if (res.ok) {
                toast.success("Follow Request Accepted", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                setFollowRequests([]);
            } else {
                toast.error(await res.json(), {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        } catch (e: any) {
            toast.error(e.message || "An error occurred", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <button onClick={getRequests} className="button4">
                Get Follow Requests
            </button>
            <div className="flex flex-col space-y-2 mt-5">
                {followRequests.length > 0 ? (
                    followRequests.map((req) => (
                        <div key={req.investorId} className="bg-gray-700 p-2 rounded-md flex justify-between items-center">
                            <Text className="text-white">
                                {req.investorId} sent a follow request
                            </Text>
                            <Button
                                onClick={() => {
                                    acceptFollow(req.startupId, req.investorId);
                                }}
                                className="ml-4 bg-green-600 hover:bg-green-700"
                            >
                                Accept
                            </Button>
                        </div>
                    ))
                ) : (
                    <Text className="text-white mt-5">No follow requests available</Text>
                )}
            </div>
        </div>
    );
}
