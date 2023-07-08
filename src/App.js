import { useState } from "react";
import "./App.css";
import AddMembersForm from "./components/AddMember/AddMembersForm";
import Header from "./components/Layout/Header";
import Table from "./components/TeamTable/Table";

const DummyData = [
  {
    id: "e1",
    name: "Anom vill",
    company: "Google",
    status: "Active",
    date: new Date(2021, 11, 10),
    note: "Most matches played",
  },
  {
    id: "e2",
    name: "Paul walk",
    company: "Microsoft",
    status: "Active",
    date: new Date(2022, 10, 10),
    note: "High scorer",
  },
  {
    id: "e3",
    name: "Riyan Giggs",
    company: "Adobe",
    status: "Closed",
    date: new Date(2023, 1, 15),
    note: "The world ended",
  },
  {
    id: "e4",
    name: "Parag",
    company: "Meta",
    status: "Active",
    date: new Date(2021, 5, 10),
    note: "Most matches played",
  },
  {
    id: "e5",
    name: "Suasi",
    company: "IBM",
    status: "Closed",
    date: new Date(2021, 1, 1),
    note: "High scorer",
  },
  {
    id: "e6",
    name: "Harchel",
    company: "Adobe",
    status: "Closed",
    date: new Date(2020, 4, 15),
    note: "The world ended",
  },
];

// DummyData[0] = localStorage.setItem("DummyData", JSON.stringify(DummyData));

//...
function App() {
  const [isData, setIsData] = useState(DummyData);
  const [isvalid, setIsValid] = useState(false);

  const showModalHandler = () => {
    setIsValid(true);
  };

  const hideModalHandler = () => {
    setIsValid(false);
  };

  //state lifting up
  const saveAddMemberHandler = (addmembersList) => {
    // console.log(addmembersList);
    setIsData((prevState) => {
      // return [addmembersList, ...prevState];
      const updatedNewMember = [...prevState];
      updatedNewMember.push({ ...addmembersList });
      return updatedNewMember;
    });
    setIsValid(false);
  };

  // const deleteItemHandler = (memberId) => {
  //   setIsData((prevState) => {
  //     const updatedNewMember = [...prevState];
  //     updatedNewMember.pop({ ...memberId });
  //     return updatedNewMember;
  //   });
  // };
  const deleteItemHandler = (index) => {
    const dataRow = [...isData];
    dataRow.splice(index, 1);
    setIsData(dataRow);
  };
  return (
    <div>
      {isvalid && (
        <AddMembersForm
          onHide={hideModalHandler}
          onSaveAddMember={saveAddMemberHandler}
        />
      )}
      <Header onAdd={showModalHandler} />
      <main>
        <Table items={isData} onDeleteItem={deleteItemHandler} />
      </main>
    </div>
  );
}

export default App;
