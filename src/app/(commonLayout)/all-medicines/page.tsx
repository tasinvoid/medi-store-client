import MedicineCard from "@/components/allMedicines/MedicineCard";
import SearchBox from "@/components/allMedicines/SearchBox";
import { Input } from "@/components/ui/input";
import { MedicineData } from "@/types";

const AllMedicinesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) => {
  const { search } = await searchParams;
  const searchQuery = search?`search=${search}`:''
  const allMedicinesData = await fetch(`http://localhost:5000/shop?${searchQuery}`, {
    cache: "no-store",
  });
  const allMedicines = await allMedicinesData.json();
  console.log(allMedicines);
  return (
    <div className="flex items-center flex-col">
      <SearchBox></SearchBox>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-6xl mx-auto">
        {allMedicines.data.data.map((medicine: MedicineData) => (
          <MedicineCard key={medicine.id} medicine={medicine}></MedicineCard>
        ))}
      </div>
    </div>
  );
};

export default AllMedicinesPage;
