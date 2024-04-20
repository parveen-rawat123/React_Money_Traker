const Navbaar = () => {
    return (
      <>
      <div className="w-full  h-[11vh] flex justify-around items-center Homepage text-green-400">
        <div className="flex gap-14  pr-48 ">
          <h2>ExpenseTrackr</h2>
          <a href="">Add Expense</a>
          <p>Monthly Expenses</p>
        </div>
        <div className="flex gap-20">
          <p>Profile</p>
          <p>Log Out : </p>
          <p>Log In</p>
        </div>
      </div>
    </>
  );
  };
  export default Navbaar;
  