import { AuthorContent } from "../lib/authors";
import theme from "../styles/theme";

type Props = {
  author: AuthorContent;
};
export default function Author({ author }: Props) {
  return (
    <>
      <span>{author.name}</span>
      <style jsx>
        {`
          span {
            color: ${theme.colors.subtext};
          }
        `}
      </style>
    </>
  );
}
