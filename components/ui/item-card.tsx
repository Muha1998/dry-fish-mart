"use client";

import { cn, ItemAvaiability } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState } from "react";
import { Button } from "./button";
import { Card, CardTitle } from "./card";
import { ArrowRight, Plus, ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { Item } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";

export const ItemCard = ({
  items,
  className,
}: {
  items: {
    id: number;
    image: string;
    itemName: string;
    category: string;
    price: number;
    desc: string;
    status: string;
  }[];
  className?: string;
}) => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<string>("1");

  const getAvailabilityBedge = (status: string) => {
    switch (status) {
      case ItemAvaiability.INSTOCK:
        return <Badge variant="secondary" className="bg-green-700 shadow text-white">In Stock</Badge>;
      case ItemAvaiability.PREORDER:
        return <Badge variant="secondary" className="bg-yellow-800 shadow text-white">Pre-Order</Badge>;
      case ItemAvaiability.OUTOFSTOCK:
        return <Badge variant="secondary" className="bg-red-900 shadow text-white">
          Out of Stock
        </Badge>;
      default:
        return null;
    }
  };

  const viewMore = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          // href={item?.link}
          // key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="flex flex-col gap-2">
            <div className="relative w-full h-52">
              <Image
                src={item.image}
                alt={item.itemName}
                fill
                className="object-cover  rounded-2xl"
              />
            </div>
            <div className="flex flex-row justify-between items-center pt-2">
              <div className="flex flex-row gap-2 items-center">
                <CardTitle>{item.itemName}</CardTitle>
                {getAvailabilityBedge(item.status)}
              </div>
              <Badge variant="secondary" className="capitalize bg-transparent py-1 px-2 shadow dark:border-white/[0.2]">{item.category}</Badge>
            </div>

            <div className="flex flex-row justify-between items-center pt-4">
              <Select value={quantity} onValueChange={setQuantity}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Qty" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((q) => (
                    <SelectItem key={q} value={q.toString()}>
                      {q}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">
                  ${item.price}
                </span>
                <Button variant="outline">
                  <ShoppingCart />
                </Button>
              </div>
            </div>
            <CardDescription>{item.desc}</CardDescription>
            <div className="w-full flex justify-end">
              <Button variant="outline" className="w-8" onClick={() => viewMore(item.id)}><ArrowRight /></Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "my-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
