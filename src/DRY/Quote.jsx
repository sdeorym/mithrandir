import { useState } from "react";
import Button from "./Button"

function Quote({quote, author, maxLength=350}) {
    const [expanded, setExpanded] = useState(false);
    const isLong = quote.length > maxLength;
    const displayedText = expanded || !isLong
        ? quote
        : quote.slice(0, maxLength) + "...";
    
    return (
        <>  
            
                <blockquote>
                    <p><span className="whatTheySaid">{displayedText}</span>
                    {isLong && (
                        <Button classname={"readMore"} onClick={() => setExpanded(!expanded)} title={expanded ? "Voir moins" : "Voir plus…"} />
                    )}</p>
                    <span className="whoSaid">{author}</span>
                </blockquote>

        </>
    )
}

export default Quote