import styles from '@/app/tests/page.module.css'
import { testsdata } from './testsdata'
import Link from 'next/link'
import { basicMeta, basicViewport } from "../../basicmeta"

export const metadata = basicMeta;
export const viewport = basicViewport;

export function getData(slug){
    const slugContents = testsdata.find((e, i)=>{
        return e.slug === slug
    })
    return slugContents;
}

export default function TestContents({ params }){
    const {slug} = params;

    const data = getData(slug);

    return(
        <div className={styles.slugpage}>
            <div className={styles.slugbox}>
                <p className={styles.slugtitle}>
                    {data.gpunum}
                </p>
                <p className={styles.slugtitle}>
                    {data.title}
                </p>
                    {
                        data.artist.length > 0 &&  
                            data.artist.map((e, i)=>{
                                return(
                                    <p className={`${styles.slugtitle} ${styles.slugtitlesmall}`} key={i}>{e}</p>
                                )
                            }) 
                    }
                <p className={`${styles.slugtitle} ${styles.slugtitlesmall}`}>
                    {data.date}
                </p>
                
                {
                    data.img.map((e, i)=>{
                        return(
                            <div className={styles.slugimgbox} key={i}>
                                <img className={styles.slugimg} src={`/assets/img/${e}`} alt='textpage img'></img>
                            </div>
                        )
                    })
                }

                <div className={styles.vrbtn}>
                    {
                        data.vr.length > 0 &&
                            <Link href={data.vr} target='_blank'><p>VR 보러가기</p></Link>
                    }
                </div>

                {
                    data.text.length > 0 &&
                        <div className={styles.slugdes} dangerouslySetInnerHTML={{__html:data.text}}></div>
                }
            </div>
        </div>
    )
}