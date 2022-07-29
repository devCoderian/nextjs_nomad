import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar(){

    const router = useRouter();
    console.log(router);

    return( 
            <nav>
               <Link href ="/">
                    <a style={{ color: router.pathname === '/'? 'active': 'blue'}}>Home</a>
               </Link>
               <Link href ="/about">
                    <a style={{ color: router.pathname === '/about'? 'active': 'blue'}}>about</a>
               </Link>
                {/* a태그를 Next에서 이동할 때 사용하지 말기 */}
                {/* <a href = "/">Home</a>
                <a href ="/about">About</a> */}
                <style jsx>{`
                    nav{
                        background-color: tomato;
                    }
                    a{
                        text-decoration: none;
                    }
                    .active{
                        color: yellow;
                    }
                `}</style>
                {/* globalStyles 추가하는 법 
                    <styles jsx global>
                    {`
                    a{
                        color: white;
                        color: ${props.color}; //이런식으로 props도 사용가능
                    }   
                    `}
                    </styles>
                 이 방법의 단점 => 페이지별로 적용해주어야 함.

                 App component 사용하기
                 App component는 모든 컴포넌트의 청사진 => next js 프레임워크 제공 기능
                 //_app.js 생성
                //Next.js 가 가장 먼저 바라보는 파일 _app.js
                 */}
            </nav>
    )
}