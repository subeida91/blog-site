import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import {
    FooterWrapper, 
    FooterSocialWrapper, 
    FooterSocialIcons,
    P, 
} from "../elements"


export const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        instagram: file(relativePath: {eq: "instagram.svg"}){
            publicURL
        }

        pinterest: file(relativePath: {eq: "pinterest.svg"}){
            publicURL
        }

        twitter: file(relativePath: {eq: "twitter.svg"}){
            publicURL
        }
    }
    `)
    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                < a href="https://twitter.com/Subeida_hq" target= "_blank" rel="noopener noreferrer">
                    <img src= {data.twitter.publicURL} alt= "twitter logo" />
                </a>

                < a href="https://pinterest.com/Subeida_hq" target= "_blank" rel="noopener noreferrer">
                    <img src= {data.pinterest.publicURL} alt= "pinterest logo" />
                </a>

                < a href="https://instagram.com/Subeida_hq" target= "_blank" rel="noopener noreferrer">
                    <img src= {data.instagram.publicURL} alt= "instagram logo" />
                </a>
            </FooterSocialIcons>
            <P size="xSmall" color="light1"> © 2021 company. All rights reserved.</P>
        </FooterSocialWrapper>
    </FooterWrapper>
}