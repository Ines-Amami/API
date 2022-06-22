function UserList(props) {
  return props.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    props.listOfUSer.map((item, index) => (
      <div className="key" key={index}>
        <img src="../Avatar.png" alt=""/> <br/>
        <h5 className="item">
      <div className="name"> {item.name} </div> <br /> {item.email} <br/>  {item.phone} <br /> {item.company.name}
        </h5>
      </div>
    ))
  );
}

export default UserList;
