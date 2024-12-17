'use client';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

export default function BlogPage() {
    return(
        <>
        {/* // Main div  */}
        <div className='relative w-[1920px] text bg-white' >

            {/* 2nd div bg-Image */}
            <div className='w-[1920px]  text-center'>
                <Image 
                src="/upper.png"
                alt='image'
                width={1920}
                height={410}
                />
                <div className='w-full text-white absolute text-center top-40 left-0 items-center'>
                    <h1 className='text-5xl font-bold'>Blog List</h1>
                    <h5 className='py-3'>Home  &gt;<span className='text-[#FF9F0D]'> Blog</span></h5>
                </div>
            </div>

            
            
        </div>
        {/* 3rd div (2nd main div) */}

<div className='w-[1440px] h-[3800px] top-0  bg-white flex mx-auto'>
    <div className='w-[872px] h-[980px] pt-[130px]  mr-[100px] bg-white'>

        {/* First Image */}
        <Image 
        src='/blogdetails1.png'
        alt=''
        width={872}
        height={530}
        className='mt-10'
        />
        <div className='flex mt-3'>
            <Image 
            src='/Calendar.png'
            alt=''
            width={23.97}
            height={24}
            className='cursor-pointer'
            />
            <Image 
            src='/Admin.png'
            alt=''
            width={267}
            height={24}
            className='cursor-pointer'
            />
        </div>
        <h1 className='font-bold text-2xl w-[504px] h-8 bg-white py-[46px] text-[#333333]'>10 Reasons To Do A Digital Detox challenge</h1>
        <p className='w-[647.26px] h-[96px] py-[40px] bg-white'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <button className='w-[172px] h-[52px] rounded-[6px] border-[1px] mt-[80px] ]py-[14px] px-[32px] text-orange-400 border-orange-400'>Read More</button>
        
         {/* Second Image */}
         
        <Image 
        src='/blogdetails2.png'
        alt=''
        width={872}
        height={530}
        className='mt-10'
        />

<div className='flex mt-3'>
            <Image 
            src='/Calendar.png'
            alt=''
            width={23.97}
            height={24}
            className='cursor-pointer'
            />
            <Image 
            src='/Admin.png'
            alt=''
            width={267}
            height={24}
            className='cursor-pointer'
            />
        </div>

        <h1 className='font-bold text-2xl w-[504px] h-8 bg-white py-[46px] text-[#333333]'>10 Reasons To Do A Digital Detox challenge</h1>
        <p className='w-[647.26px] h-[96px] py-[40px] bg-white'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <button className='w-[172px] ease-in-out duration-500 h-[52px] rounded-[6px] border-[1px] mt-[80px] ]py-[14px] px-[32px] text-orange-400 border-orange-400'>Read More</button>
        
        {/* Third image */}

        <Image 
        src='/blogdetails3.png'
        alt=''
        width={872}
        height={530}
        className='mt-10'
        />
         <div className='flex mt-3'>
            <Image 
            src='/Calendar.png'
            alt=''
            width={23.97}
            height={24}
            className='cursor-pointer'
            />
            <Image 
            src='/Admin.png'
            alt=''
            width={267}
            height={24}
            className='cursor-pointer'
            />
        </div>

        <h1 className='font-bold text-2xl w-[504px] h-8 bg-white py-[46px] text-[#333333]'>The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
        <p className='w-[647.26px] h-[96px] py-[40px] bg-white'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ta
            kimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <button className='w-[172px] h-[52px] ease-in-out duration-500 rounded-[6px] border-[1px] mt-[80px] ]py-[14px] px-[32px] text-orange-400 border-orange-400'>Read More</button>
       
        {/* Fourth Image */}

        <Image 
        src='/blogdetails4.png'
        alt=''
        width={872}
        height={530}
        className='mt-10'
        />

<div className='flex mt-3'>
            <Image 
            src='/Calendar.png'
            alt=''
            width={23.97}
            height={24}
            className='cursor-pointer'
            />
            <Image 
            src='/Admin.png'
            alt=''
            width={267}
            height={24}
            className='cursor-pointer'
            />
        </div>


        <h1 className='font-bold text-2xl w-[504px] h-8 bg-white py-[46px] text-[#333333]'>10 Reasons To Do A Digital Detox challenge</h1>
        <p className='w-[647.26px] h-[96px] py-[40px] bg-white'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <button className='w-[172px] ease-in-out duration-500 h-[52px] rounded-[6px] border-[1px] mt-[80px] ]py-[14px] px-[32px] text-orange-400 border-orange-400'>Read More</button>
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

    <div className='w-[424px] mt-[130px]  h-[2501px]'>
        <div className='flex justify-center mt-8 w-[421.82px] border-1 h-[70px]'>

            <input 
            placeholder='Search Your Keyword'
            type="text"
            className='w-[350px] px-3 py-3 bg-zinc-100 border-lg border-gray-300 '
            />
            <Button className='w-[76px] ease-in-out duration-500  h-[69px] cursor-pointer justify-center bg-[#FF9F0D]'>     
           <Image 
            src='/search.png'
            alt=''
            width={24}
            height={24}
            className='mx-3'
            />
            </Button>

            </div>

            <Image 
            src='/chef.png'
            alt=''
            width={424}
            height={423}
            className='mt-5'
            />
            <div className='justify-center mt-8 w-[423px] h-[592px] border-[1px] border-gray-400'>

            <h1 className='text-lg w-[200px] font-bold h-[28px] py-5 px-8'>Recent Posts</h1>
            
               <Image 
               src='/post1.png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />

               
               <Image 
               src='/post2.png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/post3.png'
               alt=''
               width={323}
               height={107}
               className='cursor-pointer mt-5 ml-8 '
               />

               
               <Image 
               src='/post4.png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />


            </div>

            <div className='justify-center mt-8 w-[423px] h-[592px] border-[1px] border-gray-400'>

            <h1 className='text-lg w-[200px] h-[28p] py-5 px-8 font-bold'>Filter By Menu</h1>
            
               <Image 
               src='/chicken1.png'
               alt=''
               width={311}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               
               <Image 
               src='/chicken2.png'
               alt=''
               width={311}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/chicken3.png'
               alt=''
               width={311}
               height={62}
               className='cursor-pointer ml-8 mt-5'
               />

               
               <Image 
               src='/chicken4.png'
               alt=''
               width={311}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/chicken5.png'
               alt=''
               width={311}
               height={62}
               className='ml-8 mt-2 cursor-pointer'
               />

           </div>

            <div className='w-[423px] mt-10 h-[308px] border-[1px] border-gray-400'>
            <div className='w-[325px] h-[244px] py-10 ml-10 cursor-pointer' > 

              <Image 
              src='/component.png'
              alt=''
              width={325}
              height={244}
              />                 
              </div>
            </div>

            <div className='w-[422px] mt-10 border-[1px] border-[#E0E0E0] h-[316px]'>
              <div className='w-[362px] mt-7 ml-5 h-[252px] '>
              <div  className='flex w-[362px] h-[126px]'>                  
                <Image 
                   src='/mask1.png'
                   alt=''
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />

                  <Image 
                   src='/mask3.png'
                   alt='Image'
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />
                   

                   <Image 
                   src='/mask4.png'
                   alt='Image'
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />
                   </div>
            

                   <div  className='flex mt-5 w-[362px] h-[126px]'> 
                   <Image 
                   src='/mask2.png'
                   alt=''
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />

                  <Image 
                   src='/mask5.png'
                   alt=''
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />
                   
                   <Image 
                   src='/mask6.png'
                   alt=''
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />
                   </div>
              </div>
            </div>

            <div className='mt-10 border-[1px] border-[] w-[422px] h-[158px] items-center'>
                <div className='w-[308px] mt-[25px] ml-10 h-[94px] items-center cursor-pointer'>
                  <h1 className='text-2xl font-bold'>Follow us</h1>
                    <Image 
                    src='/icon.png'
                    alt=''
                    width={308}
                    height={46.5}
                    className='mt-5'
                    />
                </div>
           </div>
           
     </div>
</div>
</>
    )
}