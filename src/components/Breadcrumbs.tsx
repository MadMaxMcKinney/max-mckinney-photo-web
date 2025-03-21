"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { capitalize } from "@/lib/utils";
import React from "react";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const [pathPages, setPathPages] = useState<string[]>([]);

    useEffect(() => {
        // Split the pathname into an array of pages
        const newPath = pathname.split("/").filter((p) => p !== "");

        // Remove the last element, which is the current page
        setPathPages(newPath.slice(0, newPath.length - 1));
    }, [pathname]);

    return (
        <>
            {pathPages.length > 0 && (
                <Breadcrumb className="mt-8 px-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        {pathPages.map((page, index) => (
                            <React.Fragment key={index}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href={`/${pathPages.slice(0, index + 1).join("/")}`}>{capitalize(page)}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                {index < pathPages.length - 1 && <BreadcrumbSeparator />}
                            </React.Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            )}
        </>
    );
}
