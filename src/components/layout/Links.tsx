import React from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { Diamond, EmojiLaughing, ChatFill } from "react-bootstrap-icons";
import TextWithIcon from "../text/TextWithIcon";

const LinkItem = ({ pathname, pageName, icon }: any) => {
  const black = "black";
  const cyan = "#17A2AE";

  const history = useHistory();
  const location = useLocation();
  return (
    <Nav.Link
      onClick={() => {
        history.push(pathname);
      }}
      style={{ color: location.pathname === pathname ? cyan : black }}
    >
      <TextWithIcon icon={icon} text={pageName} />
    </Nav.Link>
  );
};

export const Links = () => {
  return (
    <Nav className="flex-column">
      <LinkItem pathname="/" pageName="Home" icon={<Diamond />} />
      <LinkItem
        pathname="/profile"
        pageName="Profile"
        icon={<EmojiLaughing />}
      />
      <LinkItem
        pathname="/support"
        pageName="Get Support"
        icon={<ChatFill />}
      />
    </Nav>
  );
};
