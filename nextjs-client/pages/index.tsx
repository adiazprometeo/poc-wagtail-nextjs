export { default, getStaticProps } from "./[...path]";

// import { GetStaticProps } from 'next'
// import camelcaseKeys from "camelcase-keys";
// import {PageProxy} from "@components/page-proxy"


// export const getStaticProps: GetStaticProps = async (context) => {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`http://api.local.test:9099/`) 
//   const data = await res.json()
//   return {
//     props: {...camelcaseKeys(data, {deep: true})}, // will be passed to the page component as props
//   };
// }

// export default PageProxy;