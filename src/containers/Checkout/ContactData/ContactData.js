import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    addres: {
      street: "",
      postalCode: "",
    },
  };
  render() {
    return (
      <div className={styles.Cipa}>
        <h4>Enter your Contact Data:</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Mail" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <br></br>
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
