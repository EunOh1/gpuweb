import styles from '@/app/strings/page.module.css'
import Link from 'next/link';
import { getPostSlugs, getPostBySlug } from '@/app/strings/[slug]/page';

export function getData(){
    const slugs = getPostSlugs(); // 로컬의 모든 md 파일 파일명을 기준으로 배열 생성
    const posts = slugs.map((e) => getPostBySlug(e, ['slug', 'title', 'author', 'preview', 'date', 'tags', 'content'])); // 모든 포스트 자바스크립트 객체화하여 배열로 리턴 

    return posts;
}


const title = [
    {
        num: '01',
        title: '[첫인상]'
    },
    {
        num: '02',
        title: '[인상주의]'
    },
    {
        num: '03',
        title: '[회화적]'
    },
    {
        num: '04',
        title: '[장식과 범죄]'
    },
    {
        num: '05',
        title: '[아방가르드]'
    },
    {
        num: '06',
        title: '[좋은친구]'
    },
    {
        num: '07',
        title: '[미술DB]'
    },
    {
        num: '08',
        title: '[19세기_1]'
    },
    {
        num: '09',
        title: '[19세기_2]'
    },
    {
        num: '10',
        title: '[선택의 순간]'
    },
]

export default function StringsPage (){
    const posts = getData();

    const postscopy = [...posts].sort((a, b)=>{
        if (a.preview < b.preview) return 1;
        if (a.preview > b.preview) return -1;
        return 0;
    })
    return(
        <div className={styles.page}>
            <div className={styles.textbox}>
                <p className={styles.borderp}>{'***'}</p>
                <div className={styles.border}></div>
                {
                    postscopy.map((e, i)=>{
                        return(
                            <Link href={`/strings/${e.slug}`} key={i}>
                                <div className={styles.text}>
                                    <p>{e.preview}</p>
                                    <p>{e.title}</p>
                                </div>
                            </Link>
                        )
                        
                    })
                }

                {/* <div className={styles.numbtn}>
                    <p>{'<'}</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>{'>'}</p>
                </div> */}
            </div>
        </div>
    )
}