import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { data } from "@/lib/database";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAllSections() {
  return data.flatMap(category => category.sections.flatMap(section => ({ ...section })));
}

export function getAllBlocks() {
  return data.flatMap(category => category.sections.flatMap(section =>
    section.blocks.map(block => ({ ...block }))
  ));
}

export function getBlockById(id: string) {
  return data.flatMap(category => category.sections.flatMap(section =>
    section.blocks
  )).find(block => block.id === id);
}

export function getBlockBySlug(slug: string) {
  return data.flatMap(category => category.sections.flatMap(section =>
    section.blocks
  )).find(block => block.slug === slug);
}