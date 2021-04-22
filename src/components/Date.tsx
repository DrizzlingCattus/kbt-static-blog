import { format, formatISO } from "date-fns";
import theme from "../styles/theme";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span>{format(date, "LLLL d, yyyy")}</span>
      <style jsx>
        {`
          span {
            color: ${theme.colors.subtext};
          }
        `}
      </style>
    </time>
  );
}
