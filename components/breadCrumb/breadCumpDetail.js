"use client";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function BreadcrumbDetail({ book }) {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem href="/dashboard">Home</BreadcrumbItem>
        <BreadcrumbItem>{book.book_title}</BreadcrumbItem>
        <BreadcrumbItem>{book.book_author}</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}
