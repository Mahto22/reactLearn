function Profile(props){

    console.log(props);
    //props.name ="Soni";
    const {name, lastname,children} = props;
    return <h1>Name: {name} {lastname}
    {children}</h1>;
}

export default Profile;