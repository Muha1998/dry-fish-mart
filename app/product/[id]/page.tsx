'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Star } from "lucide-react";

const product = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 12999,
    originalPrice: 15999,
    rating: 4.5,
    reviews: 128,
    availability: "IN_STOCK",
    images: [
        "/products/p1.jpg",
        "/products/p2.jpg",
        "/products/p3.jpg",
        "/products/p4.jpg",
    ],
    description:
        "Experience immersive sound with our premium wireless headphones. Designed for comfort and performance.",
};

export default function ProductPage() {
    const params = useParams<{ id: string }>();

    useEffect(() => {
        console.log('hjkhkj', params.id);
    }, [params]);

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [quantity, setQuantity] = useState(1);

    const getBadge = () => {
        switch (product.availability) {
            case "IN_STOCK":
                return <Badge className="bg-green-600 text-white">In Stock</Badge>;
            case "PREORDER":
                return <Badge className="bg-yellow-600 text-white">Pre-order</Badge>;
            default:
                return <Badge className="bg-red-600 text-white">Out of Stock</Badge>;
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-10">

                {/* 🔥 LEFT - IMAGE GALLERY */}
                <div className="space-y-4">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border">
                        <Image
                            src={selectedImage}
                            alt="product"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex gap-3">
                        {/* {product.images.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedImage(img)}
                                className={`relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer border ${selectedImage === img ? "ring-2 ring-primary" : ""
                                    }`}
                            >
                                <Image src={img} alt="" fill className="object-cover" />
                            </div>
                        ))} */}
                    </div>
                </div>

                {/* 🛍️ RIGHT - PRODUCT DETAILS */}
                <div className="space-y-6">

                    <h1 className="text-3xl md:text-4xl font-bold">
                        {product.name}
                    </h1>

                    {/* ⭐ Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-500">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                            {product.rating} ({product.reviews} reviews)
                        </span>
                    </div>

                    {/* 💰 Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-primary">
                            Rs. {product.price}
                        </span>
                        <span className="line-through text-muted-foreground">
                            Rs. {product.originalPrice}
                        </span>
                    </div>

                    {/* 📦 Availability */}
                    {getBadge()}

                    {/* 🔢 Quantity */}
                    <div className="flex items-center gap-4">
                        <span className="font-medium">Quantity</span>
                        <div className="flex items-center border rounded-lg">
                            <button
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                className="p-2"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button
                                onClick={() => setQuantity((q) => q + 1)}
                                className="p-2"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>

                    {/* 🛒 Actions */}
                    <div className="flex gap-4 w-full ">
                        <Button className="">Add to Cart</Button>
                        <Button variant="secondary" className="">
                            Buy Now
                        </Button>
                    </div>

                    {/* 📄 Description */}
                    <div className="pt-4 border-t">
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}