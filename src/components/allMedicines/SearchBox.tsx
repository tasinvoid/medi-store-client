"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchBox = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [searchedText, setSearchedText] = useState(
    searchParam.get("search")?.toString() || "",
  );

  const handleSearch = (searchedText: string | undefined) => {
    const params = new URLSearchParams(searchParam.toString());
    console.log(params);
    searchedText ? params.set("search", searchedText) : params.delete("search");
    router.replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="p-5">
      <Input
        type="text"
        className="w-64"
        placeholder="Search medicines"
        onChange={(e) => setSearchedText(e.target.value)}
      ></Input>
      <Button onClick={() => handleSearch(searchedText)}>Search</Button>
    </div>
  );
};

export default SearchBox;
