import { GetServerSideProps, NextPageContext } from 'next'
import axios from 'axios'
import * as cookie from 'cookie'

export default function index(props: any) {

  return (
    <div>Hello</div>
  )

}

export function getServerSideProps(ctx: NextPageContext) {
  if(ctx.req) {
    const cookies = cookie.parse(ctx.req.headers.cookie || "");
    return {
      props: {
        token: cookies["auth-token"] || null
      }
    };
  } else return null;
}
