"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, ArrowRight } from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  price: string;
  category: "running" | "court";
  badge?: string;
  color: string;
}

const initialProducts: ProductItem[] = [
  { id: "1", name: "Tempo Runner", price: "€89", category: "running", badge: "Trending", color: "bg-zinc-800 text-white" },
  { id: "2", name: "Court Classic", price: "€94", category: "court", badge: "Limited", color: "bg-stone-800 text-white" },
  { id: "3", name: "Aero Glide Pro", price: "€129", category: "running", color: "bg-neutral-800 text-white" },
  { id: "4", name: "Vantage Retro", price: "€110", category: "court", color: "bg-zinc-900 text-white" },
];

export default function StrideShoppingDemo() {
  const [activeCategory, setActiveCategory] = useState<"all" | "running" | "court">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedIds, setLikedIds] = useState<string[]>(["1"]);

  const filtered = initialProducts.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id: string) => {
    setLikedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className="w-full max-w-xl mx-auto font-app bg-canvas border border-line rounded-lg p-5 md:p-6 shadow-sm">
      {/* App Header / Search Bar */}
      <div className="space-y-1.5 mb-5">
        <div className="flex items-center justify-between">
          <label htmlFor="stride-search" className="text-sm font-semibold text-ink">
            Search products
          </label>
          <span className="text-[11px] font-medium text-muted uppercase tracking-wider">
            Stride Mobile App
          </span>
        </div>
        <div className="relative">
          <input
            id="stride-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Try running or court"
            autoComplete="off"
            className="w-full h-11 px-4 pl-10 rounded-pill border border-[#888] bg-canvas text-ink text-sm placeholder-muted focus:outline-none focus:border-ink"
          />
          <Search size={16} className="absolute left-3.5 top-3.5 text-muted pointer-events-none" />
        </div>
      </div>

      {/* Weekend Collection Promo Card */}
      <div className="rounded-md bg-lime text-on-accent p-5 mb-5 transition-transform hover:scale-[1.01]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs uppercase tracking-wider font-bold">Featured Drop</span>
          <span className="text-xs bg-ink/10 px-2 py-0.5 rounded-pill font-semibold">Q3 Release</span>
        </div>
        <h4 className="text-2xl font-bold tracking-tight text-ink mt-1">Weekend collection</h4>
        <p className="text-xs text-ink/80 mt-1 mb-4 max-w-xs">
          Engineered for urban streets and high-pace movement with lightweight foam soles.
        </p>
        <button
          onClick={() => {
            setActiveCategory("running");
            setSearchQuery("");
          }}
          className="inline-flex items-center gap-2 h-10 px-5 rounded-pill bg-action text-on-action text-xs font-semibold hover:bg-black/85 transition-colors"
        >
          <span>Browse collection</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Category Chips */}
      <div className="flex items-center gap-2 mb-4" role="group" aria-label="Product category">
        {(["all", "running", "court"] as const).map((cat) => {
          const isPressed = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isPressed}
              onClick={() => setActiveCategory(cat)}
              className={`h-9 px-4 rounded-pill text-xs font-semibold capitalize border transition-all ${
                isPressed
                  ? "bg-lime text-on-accent border-lime shadow-xs"
                  : "bg-surface text-ink border-transparent hover:border-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Product Catalog List */}
      <div className="space-y-2.5 min-h-[160px]">
        {filtered.length > 0 ? (
          filtered.map((product) => {
            const isLiked = likedIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="flex items-center justify-between p-3.5 rounded-md bg-surface border border-line hover:border-ink/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-sm ${product.color} flex items-center justify-center font-bold text-xs`}>
                    👟
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-ink">{product.name}</span>
                      {product.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-pill bg-lime/60 text-ink font-semibold">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted capitalize">{product.category} Series</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-semibold text-sm text-ink">{product.price}</span>
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="p-1.5 rounded-full hover:bg-black/5 text-muted hover:text-ink transition-colors"
                    aria-label={`Favorite ${product.name}`}
                  >
                    <Heart
                      size={16}
                      className={isLiked ? "fill-red-500 text-red-500" : ""}
                    />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-8 text-center text-muted text-sm border border-dashed border-line rounded-md">
            No matching sneakers found for &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>

      {/* Simulated Tab Bar */}
      <div className="mt-5 pt-4 border-t border-line flex items-center justify-around text-xs text-muted">
        <button className="flex flex-col items-center gap-1 text-ink font-semibold relative">
          <ShoppingBag size={18} />
          <span>Shop</span>
          <span className="w-1.5 h-1.5 rounded-full bg-lime absolute -bottom-1" />
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-ink transition-colors">
          <Search size={18} />
          <span>Discover</span>
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-ink transition-colors">
          <Heart size={18} />
          <span>Saved</span>
        </button>
      </div>
    </div>
  );
}
