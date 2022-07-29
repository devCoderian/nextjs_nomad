/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  
  reactStrictMode: true,
  swcMinify: true,

  async redirects(){ //Source URL을 원하는 Destination URL로 간단하게 Redirect 
    return [
      {
        source: "/old-blog/:path", 
        destination: "/new-blog/:path", //path가 그대로 넘어온다. path뒤에 *을 붙이면 확장 가능
        permanent: false, //영구적인지 아닌지 결정
      }//배열에 추가 할 수 있다.
    ]
  },
  async rewrites(){ //유저가 url의 변화를 볼 수 없다. //API Key 노출 방지용으로 사용 가능. //주소 방지용으로 가능
    return [{
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }]
  }
}
/*
예를 들어 /examples로 시작하는 모든 URL / 로 리다이렉트 시키고 싶은 경우.
*를 리눅스 처럼 source: "/examples*" 혹은 source: "/examples/*"로는 동작하지 않고 꼭 아래와 같이(source: "/examples/:example*") 해줘야 동작한다.
*/

module.exports = nextConfig

// redirect 사용시 웹 외부나 어디든 이동 가능
