import React from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function Dashboard() {
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
    <React.Fragment>
      Dashboard
      <Link to="/about">About</Link>
    </React.Fragment>
  );
}
