import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import config from "../lib/config";
import theme from "../styles/theme";

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
            <p>{config.profile_description}</p>
            <SocialList />
          </div>
      	</div>
	<img className="profile-image" src={config.profile_image_url} />
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
          color: ${theme.colors.fancy};
        }

        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: ${theme.colors.handle};
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
