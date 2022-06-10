import React from "react";
import Button from '@mui/material/Button';

function Header() {
    return (
        <header className="header"> 
                <div className="toolbar">
                    <div>
                        <span>Social Pets</span>
                    </div>
                    <div>
                        <Button color="primary" variant="contained">Novo Post</Button>
                        <span>img1</span>
                        <span>img2</span>
                    </div>
                </div>
        </header>
    )
}

export default Header;