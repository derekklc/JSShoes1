import * as S from "./Header.styles";

import { searchSVG, menuSVG } from "../../constants";

import HTMLRenderer from "react-html-renderer";

console.log("render:", HTMLRenderer(`<div>abcde</div>`));

const Header = () => {
  return (
    <S.ContentWrapper>
      <S.HeaderContent>
        <S.HeaderLogoWrapper>Some Shoe Store</S.HeaderLogoWrapper>
        <S.HeaderSearchField>
          <S.SearchInput />
          <S.SearchLabel>
            <HTMLRenderer html={searchSVG} />
          </S.SearchLabel>
        </S.HeaderSearchField>
        <S.HeaderMenu>
          <S.MenuIcon>
            <HTMLRenderer html={menuSVG} />
          </S.MenuIcon>
        </S.HeaderMenu>
      </S.HeaderContent>
    </S.ContentWrapper>
  );
};

export default Header;
