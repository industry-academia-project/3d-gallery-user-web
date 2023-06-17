import React from 'react'
import * as S from "./style"
import Link from 'next/link'

const Navbar = () => {
  return (
    <S.NavbarLayout>
      <S.NavbarList>
        <S.NavbarItem>
          <S.StyledLink href={"/"}>
            MAIN
          </S.StyledLink>
        </S.NavbarItem>
        <S.NavbarItem>
        <S.StyledLink href={"/signin"}>로그인</S.StyledLink>
        </S.NavbarItem>
        <S.NavbarItem>
        <S.StyledLink href={"signup"}>회원가입</S.StyledLink>
        </S.NavbarItem>
      </S.NavbarList>
    </S.NavbarLayout>
  )
}

export default Navbar