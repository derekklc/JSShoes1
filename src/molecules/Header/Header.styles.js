import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  padding: 25px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const HeaderLogoWrapper = styled.div`
  padding-inline: 20px;
  font-size: 20px;
`;

export const HeaderSearchField = styled.div`
  height: min-content;
  position: relative;
`;

export const SearchInput = styled.input`
  padding-left: 45px;
  padding-right: 15px;
  min-height: 40px;
`;

export const SearchLabel = styled.i`
  height: 70%;
  min-height: 10px;
  min-width: 10px;
  max-height: 25px;
  svg {
    height: 100%;
    width: 100%;
  }
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  position: relative;
`;

export const MenuIcon = styled.i`
  cursor: pointer;
  svg {
    height: 30px;
    width: 30px;
  }
`;
