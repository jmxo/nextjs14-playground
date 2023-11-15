"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";

interface InfoProps {
  isPro: boolean;
}

export const Info = ({ isPro }: InfoProps) => {
  const { organization, isLoaded } = useOrganization();

  // const useOrgResult = {
  //   organization: {
  //     pathRoot: "/organizations",
  //     publicMetadata: {},
  //     membersCount: 1,
  //     pendingInvitationsCount: 0,
  //     id: "org_2gK8MZW8UeVdfhLamQQVDsueKfl",
  //     name: "Wayne Enterprises",
  //     slug: "wayne-enterprises",
  //     imageUrl:
  //       "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ0sxbGJtcnBGQmp1Y0h5ZGNPSjJFT0xCMmoiLCJyaWQiOiJvcmdfMmdLOE1aVzhVZVZkZmhMYW1RUVZEc3VlS2ZsIiwiaW5pdGlhbHMiOiJXIn0",
  //     hasImage: false,
  //     maxAllowedMemberships: 5,
  //     adminDeleteEnabled: true,
  //     createdAt: "2024-05-11T13:41:01.407Z",
  //     updatedAt: "2024-05-11T13:41:01.407Z",
  //   },
  //   isLoaded: true,
  // };

  // const { organization, isLoaded } = useOrgResult;

  if (!isLoaded) {
    return <Info.Skeleton />;
  }

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          src={organization?.imageUrl!}
          alt="Organization"
          className="rounded-md object-cover"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization?.name}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CreditCard className="h-3 w-3 mr-1" />
          {isPro ? "Pro" : "Free"}
        </div>
      </div>
    </div>
  );
};

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="w-full h-full absolute" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-[200px]" />
        <div className="flex items-center">
          <Skeleton className="h-4 w-4 mr-2" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
};
