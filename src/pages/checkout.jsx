import { Link, useLoaderData } from "react-router-dom";
import { PrimaryBtn } from "../components/buttons";
import { useUser } from "../contexts/user-provider";

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useUser();
  return (
    <section className='h-[calc(100vh-100px)] grid place-content-center text-center justify-items-center '>
      <div className='[&>*]:!mx-auto'>
        <h1 className='text-3xl'>
          <span className='text-indigo-500 font-semibold'>
            Congratulations!{" "}
          </span>
          {user?.displayName}
        </h1>
        <p className='max-w-md p-4'>
          You have successfully enrolled the{" "}
          <span className='text-indigo-500 font-semibold'> {data.title} </span>{" "}
          course with {data?.instructor} for{" "}
          <span className='text-indigo-500 font-semibold'>free</span>.
        </p>
        <Link to={"/"}>
          <PrimaryBtn>Back to home</PrimaryBtn>
        </Link>
      </div>
    </section>
  );
};

export default Checkout;
