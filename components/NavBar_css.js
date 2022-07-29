import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar(){

    const router = useRouter();
    console.log(router);

    return( 
            <nav>
                {/* Link에 스타일을 주고 싶다면 a태그내에 넣어준다. 그걸 위해 앵커 태그가 존재한다.= 아니라면 생략 가능 */}
               <Link href ="/">
                    <a style={{ color: router.pathname === '/'? 'red': 'blue'}}>Home</a>
               </Link>
               <Link href ="/about">
                    <a style={{ color: router.pathname === '/about'? 'red': 'blue'}}>about</a>
               </Link>
                {/* a태그를 Next에서 이동할 때 사용하지 말기 */}
                {/* <a href = "/">Home</a>
                <a href ="/about">About</a> */}
            </nav>
    )
}