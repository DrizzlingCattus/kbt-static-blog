import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="profile">
        <div>
          <div>
            <h1>김윤환</h1>
            <span className="handle">@DrizzlingCattus</span>
            <p>일사천리로, 적어도 더듬더듬 올바르게 진행할 수 있기를...</p>
            <SocialList />
          </div>
      	</div>
	<img className="profile-image" src="https://avatars.githubusercontent.com/u/4661295?s=400&u=f9cc8a837ea4354ffe0c822cdb9632a86a03aa3e&v=4" />
      </div>
      <style jsx>{`
	.profile-image {
	  border-radius: 50%;
	}
        .profile {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
