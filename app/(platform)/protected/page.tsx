"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";

const ProtectedPage = () => {
  const { user } = useUser();
  const { userId } = useAuth();
  return (
    <>
      <div>user: {user?.firstName}</div>
      <div>userId: {userId}</div>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default ProtectedPage;
