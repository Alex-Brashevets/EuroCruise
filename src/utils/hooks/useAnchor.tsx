import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

type AnchorProps = {
  to: string;
  path: string;
  children: React.ReactNode;
};

export const Anchor = ({ to, path, children }: AnchorProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAnchor = () => {
    scroller.scrollTo(to, {
      smooth: true,
      offset: -150,
    });
  };

  const goToHomeAndScroll = async () => {
    await navigate(path);
    await scroller.scrollTo(to, {
      smooth: true,
      offset: -150,
    });
  };

  return (
    <>
      <span
        style={{ cursor: "pointer" }}
        onClick={location.pathname === "/" ? scrollToAnchor : goToHomeAndScroll}
      >
        {children}
      </span>
    </>
  );
};
