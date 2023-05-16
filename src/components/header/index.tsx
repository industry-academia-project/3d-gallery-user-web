import * as HeaderStyle from "./style";

const Header = () => {
    return (
        <HeaderStyle.HeaderContainer>
            <div>00</div>
            <HeaderStyle.MoveLinkWrap>
                <div>Q&A</div>
                <div>FAQ</div>
                <div>회원가입</div>
                <div>로그인</div>
            </HeaderStyle.MoveLinkWrap>
        </HeaderStyle.HeaderContainer>
    );
};

export default Header;