import { GetServerSideProps, NextPageContext } from 'next'
import * as cookie from 'cookie'
import jwt from "jsonwebtoken";
import Layout from '../components/game/Layout';

export default function Index(props: { username: string }) {
  return (
    <Layout username={props.username}>
      <h1>Hello World</h1>
    </Layout>
  )
}

export function getServerSideProps(ctx: NextPageContext) {
  if(ctx.req) {
    const cookies = cookie.parse(ctx.req.headers.cookie || "");
    const token = cookies["auth-token"] || null;

    if(!token) {
      return {
        redirect: {
          permanent: false,
          destination: `/signup`
        },
      };
    }

    const decoded: any = jwt.verify(token, "test");

    return {
      props: {
        ...decoded
      }
    };
  } else return null;
}
