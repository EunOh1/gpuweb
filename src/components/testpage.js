import styles from '@/app/tests/page.module.css'
import Link from 'next/link';
import { testsdata } from '@/app/tests/[slug]/testsdata';

const thumbimg = [
    '/assets/img/0_auto.png',
    '/assets/img/1_ult.png',
    '/assets/img/2_tabbybone.png',
    '/assets/img/3_coordinates.png',
    '/assets/img/4_sujanggo.png',
    '/assets/img/5_src.png',
    '/assets/img/6_sanctum.png'
]

export default function TestsPage (){
    const sortedThumbimg = [...thumbimg].sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });

    return(
        <div className={styles.page}>
            <div className={styles.gridbox}>
                {
                    sortedThumbimg.map((e, i)=>{
                        return(
                            <div className={styles.imgbox} key={i}>
                                <Link href={`/tests/${testsdata[i].slug}`}><img src={e} className={styles.img} alt='teststhumb'></img></Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}