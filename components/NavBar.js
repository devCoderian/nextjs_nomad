import Link from 'next/link';
import { useRouter } from 'next/router';
//로컬 원격 이미지들은 next에서 제공하는 이미지 컴포넌트 사용
export default function Navbar(){

    const router = useRouter();
    console.log(router);

    return( 
            <nav>
                {/* public에 담겨있으면 경로가 필요없다. nextjs는 정적 파일 관리가 쉬움 */}
            <img src="/vercel.svg" /> 
            <div>
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
            <style jsx>{`
                    nav {
                        display: flex;
                        gap: 10px;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 20px;
                        padding-bottom: 10px;
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                      }
                      img {
                        max-width: 100px;
                        margin-bottom: 5px;
                      }
                      nav a {
                        font-weight: 600;
                        font-size: 18px;
                      }
                      .active {
                        color: tomato;
                      }
                      nav div {
                        display: flex;
                        gap: 10px;
                      }
            `}</style>
        </nav>
    )
}