areaOfCircle = (pi,r)=>{
    return pi*r*r;
}

sub=(a,b)=>{
    return a-b;
}

multi=(a,b)=>{
    return a*b;
}

module.exports={areaOfCircle,sub,multi};