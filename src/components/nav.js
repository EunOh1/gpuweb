import Link from 'next/link'
import '@/app/globals.css'

export default function Header(){
    return(
        <div className='gpuheader'>
            <Link href={'/'}>
                <svg className='logosvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.67 58.62" style={{overflow:'visible'}}>
                    <path className='svgpath' d="M34.42,32.91v25.72L0,43.81v-25.58L44.51,0l34.15,14.76v25.58l-23.36,9.53-.86-25.23-20.02,8.26Z"/>
                </svg>
            </Link>

            <div className='navborder'>
                <div className='gpunav'>
                <Link href='/tests' className='link'>tests</Link>
                <Link href='/strings' className='link'>strings</Link>
                <Link href='/contact' className='link'>contact</Link>
                </div>
            </div>
        </div>
    )
}