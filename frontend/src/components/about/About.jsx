import Navbaar from "../navigation/Navbaar"
import Footer from "../navigation/Footer"

const About = () => {
  return (
   <>
   <Navbaar/>
   <section>
    <div className="navbaar py-20">
    <h1 className="text-5xl text-center paramain font-semibold">About Expense Tracker</h1>
    </div>
    <div className=" font-normal text-xl text-[#414652] px-6 lg:px-40 py-12 flex flex-col gap-12">
    <p>
    <strong>Money Tracker,</strong> is a powerful and intuitive financial management tool designed to help you take control of your finances with ease. In today&#39;s fast-paced world, staying on top of your financial situation can be challenging. That&#39;s why we created Money Tracker&mdash;to provide you with a comprehensive solution that simplifies the process of tracking your expenses, managing your budget, and planning for your financial future.
  </p>
  <p>
    <strong> With Money Tracker, </strong> you can easily log your daily expenses and categorize them to get a clear picture of where your money is going. This feature helps you identify spending patterns and areas where you can cut back, making it easier to save money and stick to your budget. Our monthly budget monitoring tool allows you to set spending limits for different categories and track your progress throughout the month. You&#39;ll receive alerts when you&#39;re nearing your limits, helping you avoid overspending and stay within your budget.
  </p>
  <p>
    <strong> At Money Tracker,</strong> we understand the importance of security and privacy. We use advanced security measures to protect your financial data, ensuring that your personal information remains safe and confidential. Our user-friendly interface makes it easy for anyone to manage their finances, regardless of their financial expertise. With Money Tracker, you can achieve financial peace of mind and take control of your financial destiny. Start using Money Tracker today and transform the way you manage your money, empowering yourself to reach your financial goals and secure a brighter financial future.
  </p>
    </div>
   </section>
   <Footer/>
   </>
  )
}

export default About