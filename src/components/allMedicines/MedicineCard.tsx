import { Pill, ShoppingCart, Archive } from "lucide-react";
import { cn } from "@/lib/utils";
import { MedicineData } from "@/types";

export default function MedicineCard({ medicine }: { medicine: MedicineData }) {
  const formattedCategory = medicine.category
    .toLowerCase()
    .replace("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="max-w-sm bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col justify-between">
      <div className="relative bg-slate-50 p-6 flex items-center justify-center h-48 border-b border-slate-100">
        <Pill className="size-20 text-[#72B43E] opacity-80" />

        <span className="absolute top-3 left-3 bg-[#72B43E]/10 text-[#72B43E] text-xs font-bold px-2.5 py-1 rounded-full">
          {formattedCategory}
        </span>

        <span
          className={cn(
            "absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1",
            medicine.stock > 0
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700",
          )}
        >
          <Archive className="size-3" />
          {medicine.stock > 0 ? `${medicine.stock} In Stock` : "Out of Stock"}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
            {medicine.manufacturer}
          </p>
          <h3 className="text-xl font-bold text-slate-800 mt-0.5 capitalize">
            {medicine.name}
          </h3>

          <p className="text-sm text-slate-500 mt-2 line-clamp-2">
            {medicine.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <div>
            <p className="text-xs text-muted-foreground">Price</p>
            <p className="text-2xl font-black text-slate-800">
              ${medicine.price}
            </p>
          </div>

          <button
            disabled={medicine.stock === 0}
            className="flex items-center gap-2 bg-[#72B43E] hover:bg-[#619c32] active:scale-95 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none text-sm shadow-sm"
          >
            <ShoppingCart className="size-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
