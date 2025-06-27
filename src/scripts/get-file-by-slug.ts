
export async function getFileBySlug(fileSlug: string): Promise<string | null> {
  try {
    const res = await fetch(`/ui/${fileSlug}.tsx`);
    if (!res.ok) {
      console.warn(`❌ Failed to fetch: /ui/${fileSlug}.tsx`);
      return null;
    }

    return await res.text();
  } catch (err) {
    console.error("❌ Error fetching file:", err);
    return null;
  }
}
