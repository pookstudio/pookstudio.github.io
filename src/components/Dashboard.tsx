import React from "react";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user, logout }: any = useAuth();

  async function getData() {
    const url = await db
      .collection("pricingTable")
      .get()
      .then((data: any) => {
        // return data.docs[0].data().dbUrl;
        data.forEach((element: any) => {
          console.log(element.data());
          // db.doc(element.data().refStartPoint.path)
          //   .get()
          //   .then((ddd: any) => {
          //     console.log(ddd.data());
          //   });
          // db.doc(element.data().refEndPoint.path)
          //   .get()
          //   .then((ddd: any) => {
          //     console.log(ddd.data());
          //   });
        });
      });
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      Dashboard
      <h1>{user.displayName}</h1>
      <strong>email: {user.email}</strong>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
