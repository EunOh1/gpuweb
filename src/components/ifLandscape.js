'use client'
import { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import isMobile from "@/utils/isMobile";

export default function IfLandscape(){
    const [land, setland] = useState(false);

    useEffect(()=>{
        const handleResize = () => {

            const mobileLandscape = () => {
                //세로, 가로 상관없이 너비 < 1000 이면 true 리턴(모바일이란 소리). 아니면 false리턴.(모바일이 아니란 소리)
                if(isMobile() && window.innerWidth < 1000){
                    return true;
                }else{
                    return false;
                }
            }
            //1. 모바일이고, 세로일때는 false
            //2. 모바일이고, 가로일때 true
            //3. 두 개 다 아니면 false
            if(mobileLandscape() && window.matchMedia('(orientation: portrait)').matches){
                setland(false);
            }else if(mobileLandscape() && window.matchMedia('(orientation: landscape)').matches){
                setland(true);
            }else{
                setland(false);
            }
        }
        window.addEventListener('resize', handleResize); //'resize'이벤트는 기기 창 크기가 변경될때마다 함수(handleResize) 체크해라

        return () => {
            window.removeEventListener('resize', handleResize) //resize 이벤트 리스너를 제거하여, 더 이상 필요하지 않은 이벤트 처리가 시스템 리소스를 소모하는 것을 방지
        }
    },[])

    return(
        <>        
            {land && (
                <div className={styles.landscapebox}>
                    <p>◐◐</p>
                    <p>looks good in portrait mode</p>
                    <p>세로모드로 확인해주세요</p>
                </div> 
            )}
        </>
    )
}