import styles from '@/app/contact/page.module.css'
import EmailForm from './emailform'
import Link from 'next/link'

export default function ContactPage (){
    return(
        <div className={styles.page}>
            <div className={styles.conbox}>
                <div className={styles.contact}>
                    <Link href={'https://www.instagram.com/gpuseoul'} target='_blank'><p>instagram : gpuseoul</p></Link>
                    <p>e-mail: gpu.308@gmail.com</p>
                </div>
                <div className={styles.spaceinfo}>
                    <p className={styles.infotitle}>{'[온라인 공간 안내]'}</p>
                    <p>{'GPU는 온라인 공간에서 프로젝트를 함께하실 \n 작가분들을 기다리고 있습니다. \n\n type 1은 3D로 제작된 가상의 공간이며,\ntype2는 실제 공간을 3D 스캔한 공간입니다. \n\n 두 타입 중 공간을 선택하실 수 있으며,\n회화, 조각, 영상 등 다양한 형태의 작품을\n온라인으로 보여주는 전시가 가능합니다.'}</p>
                </div>
                <div className={styles.btnbox}>
                    <Link href={'https://xr.screenxyz.net/vas'} target='_blank'>
                        <div className={styles.spacebtn}><p>space type 1 : enter</p></div>
                    </Link>
                    <Link href={'https://xr.screenxyz.net/gpuonline'} target='_blank'>
                        <div className={styles.spacebtn}><p>space type 2 : enter</p></div>
                    </Link>
                </div>
                <div className={styles.emaintitlebox}>
                    <p className={styles.infotitle}>문의</p>
                    <div>
                        <EmailForm/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}