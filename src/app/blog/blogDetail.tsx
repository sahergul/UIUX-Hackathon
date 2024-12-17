import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function BlogDetails(){
    return(
        <>
              {/* // Main div  */}
        <div className='relative w-[1920px] text bg-white' >
{/* 2nd div bg-Image */}
<div className='w-[1920px]  text-center'>
    <Image 
    src='/upper.png'
    alt=''
    width={1920}
    height={410}

    />
    <div className='w-full text-white absolute text-center top-40 left-0 items-center'>
        <h1 className='text-5xl font-bold'>Blog Details</h1>
        <h5 className='py-3'>Home  &gt;<span className='text-[#FF9F0D]'> Blog Details</span></h5>
    </div>
</div>
</div>
              {/* main div */}
              <div className='w-[1440px] flex h-[3450px] bg-white mx-auto'> 
                {/* left side */}
                <div className='w-[872px] h-[845px] text-[#4F4F4F] mt-[130px] mr-[100px]'>
                        <Image 
                        src='/yougurt.png'
                        alt=''
                        width={872}
                        height={520}
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
        <h1 className='font-bold text-2xl w-[504px] h-8  py-[46px] text-[#333333]'>10 Reasons To Do A Digital Detox challenge</h1>
        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.</p>
        <br/>
        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
            Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat 
            himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.</p>


    <div className='w-[853px] h-[176px] bg-[#FF9F0D] items-center mt-[80px]'>
        <div className='w-[805px] h-[128px] text-[#4F4F4F] my-10 ml-6'>
            <Image 
            src='/quotes.png'
            alt=''
            width={48}
            height={48}
            className='mt-[50px]'
            />
            
            <p className='w-[700px] text-[#ffff] ml-[50px] text-xl font-bold h-[128px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>          
        </div>
        <p className='w-[853px] h-[120px] left-0 text-[#4F4F4F]  mt-[100px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            {/* paragraph + Image div */}
            <div className='w-[853px] flex h-[420px] mt-[60px]'>
                {/* paragraph div */}
                <div className='w-[420px] h-[236px]  text-[#4F4F4F] gap-3'>
                   <p className='w-[420px] gap-2 h-[236px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                   <p className='w-[420px] h-[168px] mt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing </p>
                </div>

                {/* Image div */}
                <div className='ml-4 w-[424px] h-[366px]'>
                    <Image 
                    src='/pic2.png'
                    alt=''
                    width={424}
                    height={366}
                    />
                </div>
            </div>
            <p className='w-[872px] h-[120px] mt-20 '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p className='w-[872px] h-[120px] mt-[50px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>  
           
            <div className=' flex h-[60px] w-[872px] justify-between items-center border-collapse border-gray-600 mt-5'>
            <div className='flex gap-5'>
            <h1 className='font-bold'>Tags:</h1><span>Restaurant, Dinner, Pizza, Yummy,</span>
                </div>
                <div className='flex gap-5'>
                <h1 className='font-bold'>Share:</h1>  
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaPinterest />    
                </div>
            </div>
            {/* Comment Section */}

            <div className='w-[872px] h-[472px] mt-10'>
                <h1 className='text-2xl font-bold'>Comments - 03</h1>
                <div className='w-[872px] h-[472px] mt-10'>
                    <Image 
                    src='/comment1.png'
                    alt=''
                    width={872}
                    height={112}
                    className='cursor-pointer'
                    />

                    <Image 
                    src='/comment2.png'
                    alt=''
                    width={672}
                    height={112}
                    className='ml-[200px] mt-5 cursor-pointer'
                    />
 
                   <Image 
                    src='/comment3.png'
                    alt=''
                    width={872}
                    height={112}
                    className='cursor-pointer mt-5'
                    />
                </div>
            </div>
             
               {/* Post a comment */}
            
            <div className='w-[872px] h-[424px] mt-5'>
                <h1 className='text-xl border-b-[1px] h-10 border-[#E0E0E0] font-bold'>Post a Comment</h1>
                <div className='w-[872px] mt-5 flex h-[80px]'>
                    <input 
                    placeholder='Name'
                    type='name'
                    className='w-[424px] text-lg text-[#4F4F4F] font-semibold border-[1px] px-3 border-[#E0E0E0] h-[56px]'
                    />
                   <input 
                    placeholder='Email'
                    type='email'
                    className='w-[424px] text-lg text-[#4F4F4F] border-[1px] font-semibold px-3 ml-3 border-[#E0E0E0] h-[56px]'
                    />
                </div>
                <input 
                placeholder='Write a Comment'
                type='text'
                className='leading-[24px] text-top h-[244px] w-[872px]  text-lg text-[#4F4F4F] border-[1px] font-semibold px-3  border-[#E0E0E0]'
                />
                <button className='w-[212px] h-[56px] ease-in-out duration-500 bg-[#FF9F0D] hover:bg-[#ffff] hover:text-[#4F4F4F] text-white mt-10'>Post a Comment</button>
            </div>
    </div>              
                </div>
                
                {/* Right Side */}
                <div className='w-[424px] mt-[100px]  h-[2501px]'>
        <div className='flex justify-center mt-8 w-[421.82px] border-1 h-[70px]'>
            <input 
            placeholder='Search Your Keyword'
            type="text"
            className='w-[350px] px-3 py-3 bg-zinc-100 border-lg border-gray-300 '
            />
            <Button className='w-[76px] h-[69px] cursor-pointer justify-center bg-[#FF9F0D]'>     
           <Image 
            src='/search.png'
            alt=''
            width={24}
            height={24}
            className='ml-6'
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
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               /> 
               <Image 
               src='/chicken2.png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />
               <Image 
               src='/chicken3.png'
               alt=''
               width={323}
               height={62}
               className='cursor-pointer ml-8 mt-5'
               />               
               <Image 
               src='/chicken4.png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/chicken5.png'
               alt=''
               width={323}
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