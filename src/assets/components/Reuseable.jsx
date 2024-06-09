

const Reuseable = () => {

    let number=Math.random()*100
    return (
        <div>
           <h1>this is a random {number.toFixed(2)}</h1> 
        </div>
    );
};

export default Reuseable;