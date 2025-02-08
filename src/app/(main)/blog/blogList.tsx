'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function BlogPage() {
    return (
        <>
            <Header heading="Blog List" subheading="Blog"/>
            <div className="container max-w-screen-2xl mx-auto px-4 py-2 md:py-10 flex flex-wrap lg:flex-nowrap">
                {/* Left Content */}
                <div className="w-full lg:w-2/3 lg:mr-10">
                    <Link href="blog/BlogDetail">
                        {/* Blog Posts */}
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="mb-10">
                                <Image
                                    src={`/blogdetails${index + 1}.png`}
                                    alt=""
                                    width={872}
                                    height={530}
                                    className="w-full h-auto cursor-pointer"
                                />
                                <div className="flex mt-3 space-x-4">
                                    <Image
                                        src="/Calendar.png"
                                        alt=""
                                        width={24}
                                        height={24}
                                        className="cursor-pointer"
                                    />
                                    <Image
                                        src="/Admin.png"
                                        alt=""
                                        width={267}
                                        height={24}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <h1 className="font-bold text-xl md:text-2xl mt-6 text-gray-800">
                                    10 Reasons To Do A Digital Detox Challenge
                                </h1>
                                <p className="mt-4 text-gray-600 text-sm md:text-base">
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr...
                                </p>
                                <button className="mt-6 px-6 py-3 rounded-md border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition">
                                    Read More
                                </button>
                            </div>
                        ))}
                    </Link>
                    {/* Pagination */}
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

                {/* Right Sidebar */}
                <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
                    {/* Search */}
                    <div className="flex items-center border rounded-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search Your Keyword"
                            className="flex-1 px-4 py-2 bg-gray-100"
                        />
                        <Button className="flex items-center justify-center bg-orange-400 hover:bg-orange-500 px-4 py-2">
                            <Image src="/search.png" alt="" width={24} height={24} />
                        </Button>
                    </div>
                    {/* Image and Recent Posts */}
                    <Image
                        src="/chef.png"
                        alt=""
                        width={424}
                        height={423}
                        className="w-full h-auto mt-10"
                    />
                    <div className="bg-white border rounded-lg mt-8 p-6">
                        <h1 className="text-lg font-bold mb-4">Recent Posts</h1>
                        {[...Array(4)].map((_, index) => (
                            <Image
                                key={index}
                                src={`/post${index + 1}.png`}
                                alt=""
                                width={323}
                                height={107}
                                className="w-full h-auto cursor-pointer mb-4"
                            />
                        ))}
                    </div>
                    {/* Filter Menu */}
                    <div className="bg-white border rounded-lg mt-8 p-6">
                        <h1 className="text-lg font-bold mb-4">Filter By Menu</h1>
                        {[...Array(5)].map((_, index) => (
                            <Image
                                key={index}
                                src={`/chicken${index + 1}.png`}
                                alt=""
                                width={311}
                                height={62}
                                className="w-full h-auto cursor-pointer mb-4"
                            />
                        ))}
                    </div>
                    {/* Follow Us */}
                    <div className="bg-white border rounded-lg mt-8 p-6 text-center">
                        <h1 className="text-2xl font-bold mb-4">Follow Us</h1>
                        <Image src="/icon.png" alt="" width={308} height={46.5} />
                    </div>
                </div>
            </div>
        </>
    );
}
