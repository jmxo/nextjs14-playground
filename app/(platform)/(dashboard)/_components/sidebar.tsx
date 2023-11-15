"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";

import { NavItem, Organization } from "./nav-item";

interface SidebarProps {
  storageKey?: string;
}

export default function Sidebar({
  storageKey = "taskify-sidebar-state",
}: SidebarProps) {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();

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

  // const { organization: activeOrganization, isLoaded: isLoadedOrg } =
  //   useOrgResult;

  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  // const useOrgListResult = {
  //   userMemberships: {
  //     data: [
  //       {
  //         pathRoot: "",
  //         publicMetadata: {},
  //         permissions: [
  //           "org:sys_profile:manage",
  //           "org:sys_profile:delete",
  //           "org:sys_memberships:read",
  //           "org:sys_memberships:manage",
  //           "org:sys_domains:read",
  //           "org:sys_domains:manage",
  //         ],
  //         id: "orgmem_2gKNzYG2FNjKoQgCoU8X7336VPQ",
  //         organization: {
  //           pathRoot: "/organizations",
  //           publicMetadata: {},
  //           membersCount: 1,
  //           pendingInvitationsCount: 0,
  //           id: "org_2gKNzX7dIkBpymxkVXtfchtnApU",
  //           name: "Arkham Inc.",
  //           slug: "arkham-inc-",
  //           imageUrl:
  //             "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ0sxbGJtcnBGQmp1Y0h5ZGNPSjJFT0xCMmoiLCJyaWQiOiJvcmdfMmdLTnpYN2RJa0JweW14a1ZYdGZjaHRuQXBVIiwiaW5pdGlhbHMiOiJBIn0",
  //           hasImage: false,
  //           maxAllowedMemberships: 5,
  //           adminDeleteEnabled: true,
  //           createdAt: "2024-05-11T15:49:31.531Z",
  //           updatedAt: "2024-05-11T15:49:31.531Z",
  //         },
  //         publicUserData: {
  //           firstName: "Mo",
  //           lastName: "Ismat",
  //           imageUrl:
  //             "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZ0s2VlFDbjVNVEE1MGhCZ3BtOU5wZXVuWWcifQ",
  //           hasImage: true,
  //           identifier: "mohamedismat91@gmail.com",
  //           userId: "user_2gK6VOIPLvLXL7KqpGMPOOoqISH",
  //         },
  //         role: "org:admin",
  //         createdAt: "2024-05-11T15:49:31.551Z",
  //         updatedAt: "2024-05-11T15:49:31.551Z",
  //       },
  //       {
  //         pathRoot: "",
  //         publicMetadata: {},
  //         permissions: [
  //           "org:sys_profile:manage",
  //           "org:sys_profile:delete",
  //           "org:sys_memberships:read",
  //           "org:sys_memberships:manage",
  //           "org:sys_domains:read",
  //           "org:sys_domains:manage",
  //         ],
  //         id: "orgmem_2gK8McRA6gAEb9HdAhJRE2q3ilr",
  //         organization: {
  //           pathRoot: "/organizations",
  //           publicMetadata: {},
  //           membersCount: 1,
  //           pendingInvitationsCount: 0,
  //           id: "org_2gK8MZW8UeVdfhLamQQVDsueKfl",
  //           name: "Wayne Enterprises",
  //           slug: "wayne-enterprises",
  //           imageUrl:
  //             "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ0sxbGJtcnBGQmp1Y0h5ZGNPSjJFT0xCMmoiLCJyaWQiOiJvcmdfMmdLOE1aVzhVZVZkZmhMYW1RUVZEc3VlS2ZsIiwiaW5pdGlhbHMiOiJXIn0",
  //           hasImage: false,
  //           maxAllowedMemberships: 5,
  //           adminDeleteEnabled: true,
  //           createdAt: "2024-05-11T13:41:01.407Z",
  //           updatedAt: "2024-05-11T13:41:01.407Z",
  //         },
  //         publicUserData: {
  //           firstName: "Mo",
  //           lastName: "Ismat",
  //           imageUrl:
  //             "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZ0s2VlFDbjVNVEE1MGhCZ3BtOU5wZXVuWWcifQ",
  //           hasImage: true,
  //           identifier: "mohamedismat91@gmail.com",
  //           userId: "user_2gK6VOIPLvLXL7KqpGMPOOoqISH",
  //         },
  //         role: "org:admin",
  //         createdAt: "2024-05-11T13:41:01.422Z",
  //         updatedAt: "2024-05-11T13:41:01.422Z",
  //       },
  //     ],
  //     count: 2,
  //     error: null,
  //     isLoading: false,
  //     isFetching: false,
  //     isError: false,
  //     page: 1,
  //     pageCount: 1,
  //     hasNextPage: false,
  //     hasPreviousPage: false,
  //   },
  //   isLoaded: true,
  // };

  // const { userMemberships, isLoaded: isLoadedOrgList } = useOrgListResult;

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-10 w-[50%]" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <NavItem.Skeleton />
          <NavItem.Skeleton />
          <NavItem.Skeleton />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
}
