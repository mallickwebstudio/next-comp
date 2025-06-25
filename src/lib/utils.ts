import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { data } from "@/lib/database";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAllBlocks() {
  return data.flatMap(section => section.category.flatMap(category =>
    category.block.map(block => ({ ...block }))
  ));
}

export function getBlockById(id: string) {
  return data.flatMap(section => section.category.flatMap(category =>
    category.block
  )).find(block => block.id === id);
}

export function getBlockBySlug(slug: string) {
  return data.flatMap(section => section.category.flatMap(category =>
    category.block
  )).find(block => block.slug === slug);
}