import { basicMeta, basicViewport } from "./basicmeta"

export const metadata = basicMeta;
export const viewport = basicViewport;

const text = [
  {
    con:
    `GPU is a Certain space located on web.
  You may call this space as an alternative, new, experimental, temporary, beta or etc.
  As a GPU, we run some artistic tests that are appropriate for = new Date()`},
  {
    con:
    `GPU는 웹상에 위치한 특정 공간입니다.
    이 공간을 대안, 신규, 실험, 임시, 베타 등으로 부를 수 있습니다.
    GPU로서 우리는 = new Date()에 적합한 몇 가지 예술적 테스트를 실행합니다.`
  }
]

export default function Home() {
  return (
    <div className='hometext'>
      {
        text.map((e, i)=>{
          return(
            <p key={i}>{e.con}</p>
          )
        })
      }
    </div>
  )
}
