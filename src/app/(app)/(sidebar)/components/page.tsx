import CategoryCard from "@/components/card/category-card";
import { data } from "@/lib/database";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Components</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data.map((category) => (
          <CategoryCard
            categoryData={category}
            key={category.slug + "ComponentsPage"}
          />
        ))}
      </section>
    </>
  );
}
