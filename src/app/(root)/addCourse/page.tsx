// this the add course page which only displays the form 

import { connectToDB } from "@/lib/connectToDB"
import { currentUser } from '@clerk/nextjs';
const page =async() => {
  //connectToDB();
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;
  return (<div>Hello {user?.firstName}</div>);
}

export default page