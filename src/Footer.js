import './App.css';

export default function Footer(){
    return(
        <div className='footer'>
            <p>&copy; 2022 ujjwal singh Website, All rights reserved.</p>
        </div>  
    );
}

/** NOTE: I used flex here, but flex is not working in this module, may be because flex has not been available in the given node modules.
 * 
 * So I'm trying static footer option.
 * Flex property is basically an inline element; inline means it spans only upto the word width.
 */