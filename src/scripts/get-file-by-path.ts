'use server';

import fs from 'fs';
import path from 'path';

export async function getFileByPath(filePath: string): Promise<string> {
  const resolvedPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`File not found: ${resolvedPath}`);
  }

  const content = fs.readFileSync(resolvedPath, 'utf-8');
  return content;
}
