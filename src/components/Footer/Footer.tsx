import React from 'react'
import { Nav } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import "./Footer.css";

export default function Footer() {
    return (
        <div className='footerhead'>

            <Nav className="footer">
                <Nav.Link href='/' ><SocialIcon bgColor='var(--primary-text)' url="https://github.com/" /></Nav.Link>
                <Nav.Link href='/' ><SocialIcon bgColor='var(--primary-text)' url="https://whatsapp.com/" /></Nav.Link>
                <Nav.Link href='/' ><BsFillTelephoneInboundFill className='telephone' size="2rem" /></Nav.Link>
                <Nav.Link href='/' ><SocialIcon bgColor='var(--primary-text)' url="https://instagram.com/" /></Nav.Link>
            </Nav>
            <p>contact us on whatsapp or instagram</p>
            <p>follow us on instagram</p>
            <p >Copyrights@Beauty collections</p>
        </div>
    )
}
