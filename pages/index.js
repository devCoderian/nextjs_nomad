// import Navbar from "../components/NavBar"; //Layout을 만듦으로써 제외
import { useEffect, useState } from "react";
import Title from "../components/Title";

// nextjs는 component의 초기상태로 html을 export하거나 prerender
// server에서 일어나는 data 관련된 작업을 모두 한 다음에 API 모두 완료되었을 때 페이지 렌더링 시작

//props로 넣어준다. results //pageProps에서 넘어오는 값들
export default function Home({results}){

    
    const [movies, setMovies] = useState([]);

    // rewrite 사용 전, 
    /*
        (async () => {
            const {results} = await (await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )).json();

            console.log('result', results);
            setMovies(results);
            
            // const json = await response.json();
        })();
    */

    // getSideServerProps 사용 전 사용후에는 데이터값을 html안에서 사용할 수 있다. 
    // next.js의 장점 => 데이터가 유효할 때 보여줄지 로딩화면을 보여준 후 데이터가 로딩되면 보여줄 지
    // 어느 시점엔 reactJS가 프론트의 주도권을 가진다.(클라이언트 사이드에서)
    // page가 유저에게 받아오기 전에 props를 받아오는 function을 만드는 것

    /* useEffect(()=> {
     
         (async () => {
            const {results} = await (await fetch(
                'api/movies'
            )).json();

            setMovies(results);
            // const json = await response.json();
        })();
    },[]);
    */
    
    //props로 받아온 값
    useEffect(() => {
        console.log(results);
        setMovies(results);
    })


    return (
        <div>
        <div className="container">
            {/* <Head>
                <title>Home | Next Movies</title>
            </Head> */}
            <Title title ="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
             <div className="movie" key={movie.id}>
               <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
               <h4>{movie.original_title}</h4>
             </div>
            ))}
            {/* {movies} */}
        </div>
        <style jsx>{`
            .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
            }
            .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
            transform: scale(1.05) translateY(-10px);
            }
            .movie h4 {
            font-size: 18px;
            text-align: center;
            }
      `}</style>
        </div>
    )
}

// Next.js를 이용해 API Key 숨기기
// API KEY 사용시 소스코드 노출 
// next.config의 rewrites 설정 사용

// API 키를 getServerSideProps에 쓰느 방법도 있다.
// 서버에서만 실행된다.
// export랑 naming 필수

/* 
기본형
export async function getServerSideProps(){
    return {
        props: {}, // will be passed to the page component as props
      }
}
*/

// 서버측에서만 실행되고 브라우저에서는 실행되지 않는다.
// getServerSideProps페이지를 렌더링하는 데 사용할 JSON을 반환
// getServerSideProps페이지 에서만 내보낼 수 있다.  페이지가 아닌 파일에서는 내보낼 수 없다.
// next/link또는 를 통해 클라이언트 측 페이지 전환 시 이 페이지를 요청하면 next/routerNext.js가 API 요청을 서버에 보냅니다.getServerSideProps

// 데이터 요청 시 렌더링이 필요한 경우는 getServerSideProps
// 렌더링 필요 없는 경우 getStaticProps 사용

//https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#fetching-data-on-the-client-side

//사용되는 컴포넌트의 props로 넣어준다.
export async function getServerSideProps(){
 
    // const { results } = await (await fetch(`/api/movies`)).json(); //front에서만 사용하는 주고 absolute url이 필요 => front에는 이미 브라우저에 url이 있음
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results //props로 넣을 원하는 데이터 삽입
        }, 
      }
}