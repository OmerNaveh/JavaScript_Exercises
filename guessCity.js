const TLV= "Tel Aviv";
const Jer= "Jerusalem";
const AC="Acre"
const Kat="Katzrin"
const Zik="Zikim"
const Mus="Musmus"

function guessCity(capital, coastal, famous, ancient) 
{
    let result="";
    if(ancient && famous && capital && !coastal)
    {
        result+=(Jer);
    }
    else if(famous&& coastal && !capital && !ancient)
    {
        result+=(TLV);
    }
    else if(ancient&& coastal &&!capital &&!famous)
    {
        result+=(AC);
    }
    else if(ancient &&!famous && !capital && !coastal)
    {
        result+=(Kat);
    }
    else if(coastal &&!famous && !capital && !ancient)
    {
        result+=(Zik);
    }
    else if(!coastal &&!famous && !capital && !ancient)
    {
        result+=(Mus);
    }
    else
    {
        result+=("Can't Guess");
    }
    return result;
}

console.log(guessCity(true,false,true,true));
/*
Jerusalem is ancient, famous and a capital
Tel Aviv is famous and coastal
Acre is coastal and ancient
Katzrin is ancient
Zikim is coastal
Musmus is not any of the above
*/