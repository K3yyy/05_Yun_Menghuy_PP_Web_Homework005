"use client";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function BreadcrumbDetail({ book }) {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem href="/dashboard">Home</BreadcrumbItem>
        <BreadcrumbItem href="/book">Read all books</BreadcrumbItem>
        <BreadcrumbItem>{book.book_title}</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}
