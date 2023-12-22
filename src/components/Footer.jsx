import React from 'react'
import styled from 'styled-components'


const StyledFooter = styled.footer`
   font-family: 'poppins', sans-serif;

`

const Footer = () => {
    return (    
        <footer className="bg-[#333] text-white flex justify-center">
            <div className="mt-5 mb-5 text-center">
                <p>&copy; 2023 Fidaa Mahboob. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer