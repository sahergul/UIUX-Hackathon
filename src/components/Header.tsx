import Image from 'next/image';


export default function Header(props:{heading: string; subheading: string}) {
    const { heading, subheading } = props;  // Destructuring the props
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
                    <h1 className='text-5xl font-bold'>{heading}</h1>
                    <h5 className='py-3'>Home  &gt;<span className='text-[#FF9F0D]'> {subheading}</span></h5>
                </div>
                </div>
                </div>
                </>
)}