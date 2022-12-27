import Head from "next/head";
import Link from "next/link";
function SignUp() {
    return ( 
        <>
            <Head>
                <title>Note</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            <div className="max-w-[25rem] bg-[#ffefd3] h-[100vh] p-10 text-[#0d1821]">
                <h1 className="text-7xl font-['Kenia'] m-10 mt-36">Important Note</h1>
                <p className="ml-6">This is a demo app to show my skills and there won't be a mobile/desktop app.</p>
            </div>
        </>
     );
}

export default SignUp;