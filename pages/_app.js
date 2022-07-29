import Layout from '../components/Layout'
import "../styles/globals.css"; //컴포넌트 X, _app.js에서만 가능하다.

//App => 이름 변경 상관없지만 _app.js 는 필수값
export default function App({Component, pageProps}){ //Prop 두개 고정/ Component, pageProps
    return (
            <>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        );
}

// + 파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 _app.js에서만 import해와서 사용해야 한다. (글로벌 css간의 충돌을 피하기 위해서이다.)
// https://nextjs.org/docs/messages/css-global

 /*
        span이 모든 페이지에 추가된다.
        return (
            <div>
                <Component {...pageProps} />;
                <span>hello</span> 
            </div>
        );
    */

    
/**
 * rehydration이란?
 * Next.js가 백엔드상에서 React.js를 돌리고 있고
 * NextJS가 페이지를 pre-generate(사전 생성) => HTML 페이지가 생성된다.
 * 하지만 유저가 모든 자바스크립트를 다운로드 한 후에,
 * ReactJS가 다시 주도권을 가져와서 일반적인 ReactJS 처럼 동작한다.
 * js가 생성되면 그후 주도권 Reactjs
 */


/**
 * XXX.module.css(.nav {})
 * import styles from "./XXXX.module.css"
 * <div className = {styles.nav} />
 */