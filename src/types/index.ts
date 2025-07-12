// types/block.ts
export type Block = {
  slug: string;
  id: string;
  name: string;
  thumbnail: string;
  path: string;
};

export type Section = {
  slug: string;
  href: string;
  name: string;
  blocks: Block[];
};

export type Category = {
  slug: string;
  href: string; 
  name: string;
  sections: Section[];
};

export type ComponentData = Category[];
