// types/block.ts
export type Block = {
  slug: string;
  id: string;
  name: string;
  thumbnail: string;
  path: string;
};

export type Category = {
  slug: string;
  href: string;
  name: string;
  block: Block[];
};

export type ComponentGroup = {
  slug: string;
  href: string; 
  name: string;
  category: Category[];
};

export type ComponentData = ComponentGroup[];
