import React, { ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    activeClassName: string;
}

function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {

    const { asPath } = useRouter();

    const className = asPath === rest.href ? activeClassName : ''
    //se a pagina q estamis acessando for igual ao link clicado, ent ativamos o classname

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}

export default ActiveLink