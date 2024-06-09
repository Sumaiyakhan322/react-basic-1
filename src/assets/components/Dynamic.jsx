

const Dynamic = () => {
     const myName='Sumaiya'
     const newName=()=>{
        return 'Tanzim nahid'
     }
    return (
        <div>
            hello there I Am {myName}
            <p>This is {newName()}</p>
        </div>
    );
};

export default Dynamic;