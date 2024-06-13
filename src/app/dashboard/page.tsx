import Image from "next/image";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center mt-8">Dashboard</h1>
        <div className="m-8">
          Log in( or log out button when logged in):
          <ul className="list-disc m-5">
            <li>create user or existing customer</li>
            <li>user name</li>
            <li>password</li>
            <li>can we add recpatcha or try google SSO or something</li>
          </ul>
        </div>
        <div className="m-8">
          <h2 className="m-8">Benefits of logging in:</h2>
          <p className="m-8">
            <ul>
              <li>Avoids spam, annonymous people and safety of all.</li>
              <li>Free Newsletter about arts and tech from me.</li>
              <li>Complimentary Birthday special!</li>
              <li>Curated content so you dont have to!</li>
              <li>Social Media call outs and responses.</li>
              <li>Access to many resources.</li>
            </ul>
          </p>
          <h3 className="m-8 text-xs">Terms and Conditions Apply. Decision of the website admin is final.
            Any breach of contract, intellectual property voilantions, harrassment, or social media trolling will result
            in a ban.</h3>
        </div>
      </div>
    </main>
  );
}
