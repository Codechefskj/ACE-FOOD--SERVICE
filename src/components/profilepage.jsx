// import React from "react";

// class ProfilePage extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       login:"dummy-login",
//       id:"dummy-id",
//       name:"dummy-name"
//     };
//     console.log("children - constructor")
//   }
  
//   async componentDidMount(){
//    let data = await fetch("https://api.github.com/users/Codechefskj")
//    let json = await data.json()
//    console.log(json);

//    this.setState({
//     login: json.login,
//     id: json.id ,
//     name: json.name,
//    })
//    console.log("childeren - componentsdidmount")

//   }
   
//    componentDidUpdate(){
//     console.log("children - compountdidmoounted")
//    }
   
//    componentWillUnmount(){
//     console.log("children-compountwillunmount")
//    }

//   render() {
//     console.log("children - render")
//     return (
//       <>      
//       <h1>This is a class-based component</h1>
//       <h2>name : {this.props.nameee}</h2>
//       <h3>{this.state.name}</h3>
//       <h3>{this.state.login}</h3>
//       <h3>{this.state.id}</h3>
//       </>
//     );
//   }
// }

// export default ProfilePage;