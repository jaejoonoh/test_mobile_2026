import React, { useState } from "react";

const sizes = [
  { label: "", value: null },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
];

const garments = [
  { label: "", value: null, sizes: ["S", "M", "L", "XL"] },
  { label: "Socks", value: 1, sizes: ["S", "L"] },
  { label: "Shirt", value: 2, sizes: ["M", "XL"] },
  { label: "Pants", value: 3, sizes: ["S", "L"] },
  { label: "Hat", value: 4, sizes: ["M", "XL"] },
];

export default function SelectingOptions() {
    const [availableGarments, setAvailableGarments] = useState<typeof garments>(
        []
    );
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedGarment, setSelectedGarment] = useState<number | null>(null);
    return (<>

    </>);
}