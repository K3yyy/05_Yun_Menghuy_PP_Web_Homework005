"use client";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function BreadcrumbCartoon({ cartoon }) {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem href="/dashboard">Home</BreadcrumbItem>
        <BreadcrumbItem href="/cartoon">View all cartoon</BreadcrumbItem>
        <BreadcrumbItem>{cartoon.ct_title}</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}
