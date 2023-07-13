import React, { useState } from "react";
import styles from "./Home.module.scss";

const Home = (props) => {
  const [isAddTxnvisible, toggleAddTxn] = useState(false);
  const [transactions, updateTransactions] = useState([]);
  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactions.push(payload);
    updateTransactions(transactionArray);
  };
  return (
    <>
      <div className={styles.home_container}>
        <div className={styles.home_container_content}>
          <div className={styles.home_container_content_top}>
            <h1>Finance Manager</h1>
          </div>
          <div className={styles.home_container_content_middle}>
            <div className={styles.home_container_content_middle_topBox}>
              <h1>Balance: $10000</h1>
              <div
                className={styles.home_container_content_middle_topBox_Addbtn}
                onClick={() => toggleAddTxn(!isAddTxnvisible)}
              >
                {isAddTxnvisible ? "Cancel" : "Add"}
              </div>
            </div>
            {isAddTxnvisible && <AddTxnViewModel toggleAddTxn={toggleAddTxn} />}
            <div
              className={styles.home_container_content_middle_bottomBox}
            ></div>
          </div>
          <div className={styles.home_container_content_bottom}></div>
        </div>
      </div>
    </>
  );
};

export default Home;

const AddTxnViewModel = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");
  const addTransaction = () => {
    console.log({ amount, desc, type });
    props.toggleAddTxn();
  };
  return (
    <>
      <div className={styles.viewModel}>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className={styles.viewModel_radiobox}>
          <input
            type="radio"
            id="expense"
            name="type"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            id="income"
            name="type"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="income">Income</label>
        </div>
        <div
          className={styles.home_container_content_middle_topBox_Addbtn}
          onClick={addTransaction}
        >
          Add Transaction
        </div>
      </div>
    </>
  );
};
